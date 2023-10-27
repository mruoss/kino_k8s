defmodule KinoK8s.ResourceGVKCache do
  @moduledoc """
  This GenServer caches resources (Group-Version-Kind) in a cluster by
  repeatedly polling the API for endpoints. The module handle cache multiple
  clusters. To initialize the cache for a cluster, call `add_conn/1` and pass
  the `%K8s.Conn{}` for the desired cluster.
  """

  use GenServer

  require Logger

  @type conn_hash :: binary()
  @type conn_t :: %{
          conn: K8s.Conn.t(),
          gvks: [map],
          waiting: [pid()]
        }

  @type t :: %{
          conn_hash() => conn_t()
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
  def init_cache(conn) do
    conn_hash = hash(conn)
    GenServer.cast(__MODULE__, {:add_conn, conn, conn_hash})
    conn_hash
  end

  @doc """
  Returns the connection for the given `conn_hash`.
  """
  def get_conn(conn_hash) do
    GenServer.call(__MODULE__, {:get_conn, conn_hash})
  end

  @doc """
  Returns the resources (GVK) for the given connection.
  """
  def get_gvks(conn_hash) do
    GenServer.call(__MODULE__, {:get_gvks, conn_hash})
  end

  @impl true
  def init(_args) do
    {:ok, %{}}
  end

  @impl true
  def handle_info({:update, conn_hash}, state) do
    load_gvks(get_in(state, [conn_hash, :conn]), conn_hash, self())
    Process.send_after(self(), {:update, conn_hash}, @update_frequency * 1000)
    {:noreply, state}
  end

  @impl true
  def handle_cast({:gvks, conn_hash, gvks}, state) do
    for pid <- get_in(state, [conn_hash, :waiting]), do: GenServer.reply(pid, gvks)
    {:noreply, put_in(state, [conn_hash, :gvks], gvks)}
  end

  def handle_cast({:add_conn, _conn, conn_hash}, state) when is_map_key(state, conn_hash) do
    {:noreply, state}
  end

  def handle_cast({:add_conn, conn, conn_hash}, state) do
    send(self(), {:update, conn_hash})
    {:noreply, Map.put(state, conn_hash, %{conn: conn, gvks: [], waiting: []})}
  end

  @impl true
  def handle_call({:get_gvks, conn_hash}, from, %{gvks: []} = state) do
    new_state = update_in(state, [conn_hash, :waiting], fn waiting -> [from | waiting] end)
    {:noreply, new_state}
  end

  def handle_call({:get_gvks, conn_hash}, _from, state) do
    {:reply, get_in(state, [conn_hash, :gvks]), state}
  end

  def handle_call({:get_conn, conn_hash}, _from, state) do
    {:reply, get_in(state, [conn_hash, :conn]), state}
  end

  defp load_gvks(conn, conn_hash, pid) do
    spawn_link(fn ->
      {:ok, api_versions} = K8s.Discovery.versions(conn)

      result =
        for api_version <- api_versions,
            {:ok, gvks} = K8s.Discovery.resources(api_version, conn),
            gvk <- gvks,
            not String.contains?(gvk["name"], "/") do
          %{
            "index" => "#{String.replace(api_version, "/", "")}#{gvk["name"]}",
            "api_version" => api_version,
            "name" => gvk["name"],
            "kind" => gvk["kind"],
            "namespaced" => gvk["namespaced"]
          }
        end

      GenServer.cast(pid, {:gvks, conn_hash, result})
    end)
  end

  def hash(conn), do: :erlang.phash2(conn)
end
