defmodule KinoK8s.TerminalCell do
  @moduledoc false

  use Kino.JS, assets_path: "lib/assets/terminal_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Connect to Pod (Exec/Logs)"

  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

  @impl true
  @spec init(nil | maybe_improper_list() | map(), Kino.JS.Live.Context.t()) ::
          {:ok, Kino.JS.Live.Context.t()}
  def init(attrs, ctx) do
    {:ok,
     ctx
     |> assign(
       mix_env: Mix.env(),
       connections: [],
       connection: nil,
       connect_tos: ["exec", "logs"],
       connect_to: attrs["connect_to"] || "exec",
       namespaces: attrs["namespaces"],
       namespace: attrs["namespace"],
       pods: attrs["pods"],
       pod: attrs["pod"],
       containers: attrs["containers"],
       container: attrs["container"]
     )}
  end

  @impl true
  def to_source(attrs) do
    if all_fields_filled?(attrs, ["connection", "namespace", "pod", "container"]) do
      %{
        "connection" => connection,
        "namespace" => namespace,
        "pod" => pod,
        "container" => container,
        "connect_to" => connect_to
      } = attrs

      connect_to_pod =
        case connect_to do
          "exec" ->
            quote do
              {:ok, send_to_websocket} =
                K8s.Client.connect(
                  "v1",
                  "pods/exec",
                  [namespace: unquote(namespace), name: unquote(pod)],
                  container: unquote(container),
                  command: "/bin/sh",
                  tty: true
                )
                |> K8s.Client.put_conn(unquote(quoted_var(connection.variable)))
                |> K8s.Client.stream_to(terminal_kino_pid)

              send_to_websocket
            end

          "logs" ->
            quote do
              {:ok, send_to_websocket} =
                K8s.Client.connect(
                  "v1",
                  "pods/log",
                  [namespace: unquote(namespace), name: unquote(pod)],
                  container: unquote(container),
                  tailLines: 100,
                  follow: true
                )
                |> K8s.Client.put_conn(unquote(quoted_var(connection.variable)))
                |> K8s.Client.stream_to(terminal_kino_pid)

              send_to_websocket
            end
        end

      quote do
        connect_to_pod = fn terminal_kino_pid ->
          unquote(connect_to_pod)
        end

        KinoK8s.KinoTerminal.open(connect_to_pod)
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
     |> set_pods()
     |> broadcast_update()}
  end

  def handle_event("update_pod", pod, ctx) do
    {:noreply,
     ctx
     |> assign(pod: pod)
     |> set_containers()
     |> broadcast_update()}
  end

  def handle_event("update_container", container, ctx) do
    {:noreply,
     ctx
     |> assign(container: container)
     |> set_containers()
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

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def to_attrs(ctx), do: get_js_attrs(ctx)

  defp get_js_attrs(ctx) do
    Map.new(ctx.assigns, fn {key, value} -> {Atom.to_string(key), value} end)
  end

  defp set_namespaces(ctx) when is_nil(ctx.assigns.connection) do
    ctx
    |> assign(namespaces: nil, namespace: nil)
    |> set_pods()
  end

  defp set_namespaces(ctx) do
    with {:ok, namespaces} <- K8sHelper.namespaces(conn(ctx)) do
      namespace =
        if ctx.assigns.namespace in namespaces,
          do: ctx.assigns.namespace,
          else: List.first(namespaces)

      ctx
      |> assign(namespaces: namespaces, namespace: namespace)
      |> set_pods()
    else
      _ -> ctx
    end
  end

  defp set_pods(ctx) when is_nil(ctx.assigns.namespace) do
    ctx
    |> assign(pods: nil, pod: nil)
    |> set_containers()
  end

  defp set_pods(ctx) do
    case K8sHelper.pods(conn(ctx), ctx.assigns.namespace) do
      {:ok, pods} ->
        pod = List.first(pods)

        ctx
        |> assign(pods: pods, pod: pod)
        |> set_containers()

      _ ->
        ctx
    end
  end

  defp set_containers(ctx) when is_nil(ctx.assigns.pod),
    do: assign(ctx, containers: nil, container: nil)

  defp set_containers(ctx) do
    with {:ok, containers} <-
           K8sHelper.containers(conn(ctx), ctx.assigns.namespace, ctx.assigns.pod) do
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
