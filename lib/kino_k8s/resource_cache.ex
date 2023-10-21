defmodule KinoK8s.ResourceCache do
  use GenServer

  require Logger

  defstruct [:conn, resources: [], waiting: []]

  # seconds
  @update_frequency 60

  def start_link(_) do
    case System.get_env("KUBECONFIG") do
      nil ->
        Logger.warning("KUBECONFIG environment variable not found. Not starting Server.")
        {:error, :no_kubeconfig}

      kubeconfig ->
        {:ok, conn} = K8s.Conn.from_file(kubeconfig, insecure_skip_tls_verify: true)
        GenServer.start_link(__MODULE__, conn, name: __MODULE__)
    end
  end

  def get_resources() do
    GenServer.call(__MODULE__, :get_resources)
  end

  @impl true
  def init(conn) do
    send(self(), :update)
    {:ok, %__MODULE__{conn: conn}}
  end

  @impl true
  def handle_info(:update, state) do
    get_resources(state.conn, self())
    Process.send_after(self(), :update, @update_frequency * 1000)
    {:noreply, state}
  end

  def handle_info({:resources, resources}, %{waiting: []} = state) do
    {:noreply, struct!(state, resources: resources)}
  end

  def handle_info({:resources, resources}, state) do
    for pid <- state.waiting, do: GenServer.reply(pid, resources)
    {:noreply, struct!(state, resources: resources)}
  end

  @impl true
  def handle_call(:get_resources, from, %{resources: []} = state) do
    new_state = update_in(state.waiting, fn waiting -> [from | waiting] end)
    {:noreply, new_state}
  end

  def handle_call(:get_resources, _from, state) do
    {:reply, state.resources, state}
  end

  defp get_resources(conn, pid) do
    spawn_link(fn ->
      {:ok, api_versions} = K8s.Discovery.versions(conn)

      result =
        for api_version <- api_versions,
            {:ok, resources} = K8s.Discovery.resources(api_version, conn),
            resource <- resources,
            not String.contains?(resource["name"], "/") do
          %{
            index: "#{String.replace(api_version, "/", "")}#{resource["singularName"]}",
            api_version: api_version,
            name: resource["name"],
            kind: resource["kind"],
            namespaced: resource["namespaced"]
          }
        end

      send(pid, {:resources, result})
    end)
  end
end
