defmodule KinoK8s.ResourceGVKCache do
  use GenServer

  require Logger

  defstruct [:conn, gvks: [], waiting: []]

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

  def get_gvks() do
    GenServer.call(__MODULE__, :get_gvks)
  end

  @impl true
  def init(conn) do
    send(self(), :update)
    {:ok, %__MODULE__{conn: conn}}
  end

  @impl true
  def handle_info(:update, state) do
    get_gvks(state.conn, self())
    Process.send_after(self(), :update, @update_frequency * 1000)
    {:noreply, state}
  end

  def handle_info({:gvks, gvks}, %{waiting: []} = state) do
    {:noreply, struct!(state, gvks: gvks)}
  end

  def handle_info({:gvks, gvks}, state) do
    for pid <- state.waiting, do: GenServer.reply(pid, gvks)
    {:noreply, struct!(state, gvks: gvks)}
  end

  @impl true
  def handle_call(:get_gvks, from, %{gvks: []} = state) do
    new_state = update_in(state.waiting, fn waiting -> [from | waiting] end)
    {:noreply, new_state}
  end

  def handle_call(:get_gvks, _from, state) do
    {:reply, state.gvks, state}
  end

  defp get_gvks(conn, pid) do
    spawn_link(fn ->
      {:ok, api_versions} = K8s.Discovery.versions(conn)

      result =
        for api_version <- api_versions,
            {:ok, gvks} = K8s.Discovery.resources(api_version, conn),
            gvk <- gvks,
            not String.contains?(gvk["name"], "/") do
          %{
            index: "#{String.replace(api_version, "/", "")}#{gvk["name"]}",
            api_version: api_version,
            name: gvk["name"],
            kind: gvk["kind"],
            namespaced: gvk["namespaced"],
          }
        end

      send(pid, {:gvks, result})
    end)
  end
end
