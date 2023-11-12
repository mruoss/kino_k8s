defmodule KinoK8s.SmartCellHelper do
  alias KinoK8s.K8sHelper
  alias KinoK8s.ResourceGVKCache

  def scan_connections(pid, binding) do
    connections =
      for {key, value} <- binding,
          is_atom(key),
          is_struct(value, K8s.Conn),
          do: %{variable: Atom.to_string(key), conn_hash: ResourceGVKCache.init_cache(value)}

    send(pid, {:connections, connections})
  end

  def get_namespaces(ctx) do
    conn = conn(ctx)

    namespaces =
      case K8sHelper.namespaces(conn) do
        {:ok, namespaces} ->
          if ctx.assigns.request_type == "get", do: namespaces, else: ["__ALL__" | namespaces]

        _ ->
          if is_nil(conn.namespace), do: nil, else: [conn.namespace]
      end

    namespace =
      case conn.namespace do
        nil ->
          namespaces = List.wrap(namespaces)

          if ctx.assigns.namespace in namespaces,
            do: ctx.assigns.namespace,
            else: List.first(namespaces)

        namespace ->
          namespace
      end

    [namespaces: namespaces, namespace: namespace]
  end

  defp conn(ctx) do
    ResourceGVKCache.get_conn(ctx.assigns.connection.conn_hash)
  end
end
