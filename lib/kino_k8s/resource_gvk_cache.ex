defmodule KinoK8s.ResourceGVKCache do
  @moduledoc false

  use GenServer

  require Logger

  @type t :: %{
          (context :: binary()) => %{
            gvks: [map],
            waiting: [pid()]
          }
        }

  # seconds
  @update_frequency 60

  def start_link(_) do
    GenServer.start_link(__MODULE__, nil, name: __MODULE__)
  end

  @doc """
  Initializes the the cache for the cluster defined by the given `conn`.
  The connection map is hashed and the hash is returned.
  """
  def init_cache(context) do
    GenServer.cast(__MODULE__, {:add_conn, context})
    :ok
  end

  @doc """
  Returns the resources (GVK) for the given connection.
  """
  def get_gvks(context) do
    GenServer.call(__MODULE__, {:get_gvks, context})
  end

  @impl true
  def init(_args) do
    {:ok, %{}}
  end

  @impl true
  def handle_info({:update, context}, state) do
    load_gvks(context, self())
    Process.send_after(self(), {:update, context}, @update_frequency * 1000)
    {:noreply, state}
  end

  @impl true
  def handle_cast({:gvks, context, gvks}, state) do
    for pid <- get_in(state[context].waiting), do: GenServer.reply(pid, gvks)
    {:noreply, put_in(state[context].gvks, gvks)}
  end

  def handle_cast({:add_conn, context}, state) when is_map_key(state, context) do
    {:noreply, state}
  end

  def handle_cast({:add_conn, context}, state) do
    send(self(), {:update, context})
    {:noreply, Map.put(state, context, %{gvks: [], waiting: []})}
  end

  @impl true
  def handle_call({:get_gvks, context}, from, %{gvks: []} = state) do
    new_state = update_in(state[context].waiting, fn waiting -> [from | waiting] end)
    {:noreply, new_state}
  end

  def handle_call({:get_gvks, context}, _from, state) do
    {:reply, get_in(state[context].gvks) || [], state}
  end

  defp load_gvks(context, pid) do
    spawn_link(fn ->
      resp =
        Req.new()
        |> Kubereq.attach(context: context, resource_path: nil)
        |> Req.get!(url: "/apis", operation: nil)

      gvks =
        for group <- resp.body["groups"],
            version <- group["versions"],
            api_version = version["groupVersion"],
            gvks = resources("apis/#{api_version}", context),
            gvk <- gvks,
            gvk_map = Map.new(gvks, &{&1["name"], &1}) do
          [main_resource | subresources] = String.split(gvk["name"], "/")
          subresource = Enum.at(subresources, 0)
          kind = gvk_map[main_resource]["kind"]

          Map.merge(gvk, %{
            "subresource" => subresource,
            "kind" => kind,
            "api_version" => api_version
          })
        end

      resp =
        Req.new()
        |> Kubereq.attach(context: context, resource_path: nil)
        |> Req.get!(url: "/api", operation: nil)

      gvks =
        for api_version <- resp.body["versions"],
            gvks = resources("api/#{api_version}", context),
            gvk <- gvks,
            gvk_map = Map.new(gvks, &{&1["name"], &1}),
            reduce: gvks do
          gvks ->
            [main_resource | subresources] = String.split(gvk["name"], "/")
            subresource = Enum.at(subresources, 0)
            kind = gvk_map[main_resource]["kind"]

            gvk =
              Map.merge(gvk, %{
                "subresource" => subresource,
                "kind" => kind,
                "api_version" => api_version
              })

            [gvk | gvks]
        end

      GenServer.cast(pid, {:gvks, context, gvks})
    end)
  end

  defp resources(path, context) do
    resp =
      Req.new()
      |> Kubereq.attach(context: context, resource_path: nil)
      |> Req.get!(url: path, operation: nil)

    resp.body["resources"]
  end
end
