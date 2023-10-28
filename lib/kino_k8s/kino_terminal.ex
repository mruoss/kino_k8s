defmodule KinoK8s.KinoTerminal do
  @moduledoc """
  A Livebook Kino providing a Terminal to a Kubernetes Pod.
  """
  use Kino.JS
  use Kino.JS.Live

  @doc """
  Connects to a Kubernetes Pod and opens a Terminal.

  ### Arguments

  - `conn` - a `%K8s.Conn{}` struct that can be optained by calling `K8s.Conn.from_file/2`
  - `namespace` - The namespace your pod runs in
  - `pod` - The name of your pod

  ### Options

  - `container` - If your pod runs multiple containers, define the container you want to connect to.
  - `command` - optional. The shell that is executed once connected. Defaults to `/bin/sh`.

  ### Example

      {:ok, conn} = K8s.Conn.from_file("~/.kube/config", context: "some_local_cluster")
      # For local clusters, you might want to skip TLS verification
      conn = struct!(conn, insecure_skip_tls_verify: true)

      namespace = "default"
      pod = "nginx-deployment-6595874d85-5kdf4"
      container = "nginx"
      command = "/bin/bash"

      KinoK8s.KinoTerminal.open(conn, namespace, pod, container: container, command: command)
  """
  def open(conn, namespace, pod, opts \\ []) do
    ctx =
      Kino.JS.Live.new(__MODULE__,
        conn: conn,
        namespace: namespace,
        pod: pod,
        container: Keyword.get(opts, :container),
        command: Keyword.get(opts, :command, "/bin/sh")
      )

    Kino.JS.Live.cast(ctx, :open_terminal)
    ctx
  end

  @impl true
  def init(attrs, ctx) do
    {:ok, assign(ctx, Keyword.put(attrs, :buffer, []))}
  end

  @impl true
  def handle_connect(ctx) do
    buffer = ctx.assigns.buffer |> Enum.reverse() |> IO.iodata_to_binary()
    {:ok, %{buffer: buffer}, ctx}
  end

  @impl true
  def handle_cast(:open_terminal, ctx) do
    {:ok, send_to_websocket} =
      K8s.Client.connect(
        "v1",
        "pods/exec",
        [namespace: ctx.assigns.namespace, name: ctx.assigns.pod],
        container: ctx.assigns.container,
        command: ctx.assigns.command,
        tty: true
      )
      |> K8s.Client.put_conn(ctx.assigns.conn)
      |> K8s.Client.stream_to(self())

    {:noreply, assign(ctx, send_to_websocket: send_to_websocket)}
  end

  @impl true
  def handle_info(:open, ctx) do
    {:noreply, ctx}
  end

  def handle_info({:stdout, data}, ctx) do
    broadcast_event(ctx, "print-terminal", data)

    new_buffer =
      case String.split(data, "\n") do
        [chunk] -> [chunk | ctx.assigns.buffer]
        [_ | tail] -> [List.last(tail)]
      end

    {:noreply, assign(ctx, buffer: new_buffer)}
  end

  def handle_info({:close, _}, ctx) do
    broadcast_event(ctx, "dispose-terminal", nil)
    {:noreply, assign(ctx, send_to_websocket: nil, buffer: [])}
  end

  def handle_info(_other_msg, ctx) do
    {:noreply, ctx}
  end

  @impl true
  def handle_event("key", key, ctx) do
    ctx.assigns.send_to_websocket.({:stdin, key})
    {:noreply, ctx}
  end

  asset "main.js" do
    """
    import "https://cdn.jsdelivr.net/npm/xterm@5.0.0/lib/xterm.min.js";

    export function init(ctx, attrs) {
      ctx.importCSS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/css/xterm.css");

      ctx.root.innerHTML = `
        <div id="k8s-terminal">
          <div class="k8s-xtermjs-container"></div>
        </div>
      `;

      const k8s_xterm = new Terminal();
      k8s_xterm.onKey((key) => ctx.pushEvent("key", key.key));
      k8s_xterm.open(ctx.root.querySelector(".k8s-xtermjs-container"));
      ctx.handleEvent("print-terminal", (data) => k8s_xterm.write(data));
      ctx.handleEvent("dispose-terminal", () => k8s_xterm.dispose());
      k8s_xterm.write(attrs.buffer);
    }
    """
  end
end
