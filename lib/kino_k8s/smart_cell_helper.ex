defmodule KinoK8s.SmartCellHelper do
  @moduledoc false

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
    req = ctx.assigns.req

    namespaces =
      case K8sHelper.namespaces(req) do
        {:ok, namespaces} ->
          namespaces

        _ ->
          []
      end

    namespaces = List.wrap(namespaces)

    namespace =
      if !is_nil(ctx.assigns.fields["namespace"]) and
           ctx.assigns.fields["namespace"] in namespaces do
        ctx.assigns.fields["namespace"]
      else
        req.options.kubeconfig.current_namespace || List.first(namespaces)
      end

    %{"namespaces" => namespaces, "namespace" => namespace}
  end
end
