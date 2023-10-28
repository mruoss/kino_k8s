defmodule KinoK8s.TerminalCell do
  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper
  use Kino.JS, assets_path: "lib/assets/terminal_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Pod Terminal (Exec/Logs)"

  @impl true
  def init(attrs, ctx) do
    {:ok,
     ctx
     |> assign(
       mix_env: Mix.env(),
       connections: [],
       connection: nil,
       connect_tos: ["exec", "logs"],
       connect_to: attrs[:connect_to] || "exec",
       namespaces: attrs[:namespaces],
       namespace: attrs[:namespace],
       pods: attrs[:pods],
       pod: attrs[:pod],
       containers: attrs[:containers],
       container: attrs[:container]
     )}
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def to_attrs(ctx) do
    ctx.assigns
  end

  @impl true
  def to_source(attrs) do
    if all_fields_filled?(attrs, [:connection, :namespace, :pod, :container]) do
      %{
        connection: connection,
        namespace: namespace,
        pod: pod,
        container: container,
        connect_to: connect_to
      } = attrs

      func =
        case connect_to do
          "exec" -> :exec
          "logs" -> :log
        end

      quote do
        KinoK8s.KinoTerminal.unquote(func)(
          unquote(quoted_var(connection.variable)),
          unquote(namespace),
          unquote(pod),
          container: unquote(container)
        )
      end
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
  end

  @impl true
  def handle_event("update_connection", variable, ctx) do
    connection = Enum.find(ctx.assigns.connections, &(&1.variable == variable))
    {:noreply, ctx |> assign(connection: connection) |> set_namespaces() |> broadcast_update()}
  end

  def handle_event("update_connect_to", connect_to, ctx) do
    {:noreply, ctx |> assign(connect_to: connect_to) |> broadcast_update()}
  end

  def handle_event("update_namespace", namespace, ctx) do
    {:noreply,
     ctx
     |> assign(namespace: namespace)
     |> set_pods(namespace)
     |> broadcast_update()}
  end

  def handle_event("update_pod", pod, ctx) do
    {:noreply,
     ctx
     |> assign(pod: pod)
     |> set_containers(pod)
     |> broadcast_update()}
  end

  def handle_event("update_container", container, ctx) do
    {:noreply,
     ctx
     |> assign(container: container)
     |> set_containers(container)
     |> broadcast_update()}
  end

  @impl true
  def handle_info({:connections, connections}, ctx) do
    connection = List.first(connections)

    {:noreply,
     ctx
     |> assign(connections: connections, connection: ctx.assigns.connection || connection)
     |> set_namespaces()
     |> broadcast_update()}
  end

  @impl true
  def scan_binding(pid, binding, _env) do
    connections =
      for {key, value} <- binding,
          is_atom(key),
          is_struct(value, K8s.Conn),
          do: %{variable: Atom.to_string(key), conn_hash: ResourceGVKCache.hash(value)}

    send(pid, {:connections, connections})
  end

  defp broadcast_update(ctx) do
    broadcast_event(ctx, "update", get_js_attrs(ctx))
    ctx
  end

  defp get_js_attrs(ctx) do
    ctx.assigns
  end

  defp set_namespaces(ctx) when is_nil(ctx.assigns.connection) do
    ctx
    |> assign(namespaces: nil, namespace: nil)
    |> set_pods(nil)
  end

  defp set_namespaces(ctx) do
    with {:ok, namespaces} <- K8sHelper.namespaces(conn(ctx)) do
      namespace = List.first(namespaces)

      ctx
      |> assign(namespaces: namespaces, namespace: namespace)
      |> set_pods(namespace)
    else
      _ -> ctx
    end
  end

  defp set_pods(ctx, nil) do
    ctx
    |> assign(pods: nil, pod: nil)
    |> set_containers(nil)
  end

  defp set_pods(ctx, namespace) do
    case K8sHelper.pods(conn(ctx), namespace) do
      {:ok, pods} ->
        pod = List.first(pods)

        ctx
        |> assign(pods: pods, pod: pod)
        |> set_containers(pod)

      _ ->
        ctx
    end
  end

  defp set_containers(ctx, nil), do: assign(ctx, containers: nil, container: nil)

  defp set_containers(ctx, pod) do
    with {:ok, containers} <- K8sHelper.containers(conn(ctx), ctx.assigns.namespace, pod) do
      container = List.first(containers)

      assign(ctx, containers: containers, container: container)
    else
      _ -> ctx
    end
  end

  defp conn(ctx) do
    ResourceGVKCache.get_conn(ctx.assigns.connection.conn_hash)
  end

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}

  defp all_fields_filled?(attrs, keys) do
    not Enum.any?(keys, fn key -> attrs[key] in [nil, ""] end)
  end
end
