defmodule KinoK8s.KinoTerminal do
  @moduledoc """
  A Livebook Kino providing a Terminal to a Kubernetes Pod.
  """
  use Kino.JS
  use Kino.JS.Live

  @doc """
  Opens a terminal using xterm.js.
  Expects `connect` to be a function to establish the connection to the
  underlying IO process. The function will be called passing the pid of this
  Kino and is expected to return a function that should be used to send messages
  to the process.
  """
  @spec open((kino_terminal_pid :: pid() -> send_to_process :: (term() -> term()))) ::
          Kino.JS.Live.t()
  def open(connect) do
    Kino.JS.Live.new(__MODULE__, %{connect: connect})
  end

  @impl true
  def init(attrs, ctx) do
    send_to_process = attrs.connect.(self())
    {:ok, assign(ctx, buffer: [], send_to_process: send_to_process)}
  end

  @impl true
  def handle_connect(ctx) do
    buffer = ctx.assigns.buffer |> Enum.reverse() |> IO.iodata_to_binary()
    {:ok, %{buffer: buffer}, ctx}
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
    {:noreply, assign(ctx, send_to_process: nil, buffer: [])}
  end

  def handle_info(_other_msg, ctx) do
    {:noreply, ctx}
  end

  @impl true
  def handle_event("key", key, ctx) do
    ctx.assigns.send_to_process.({:stdin, key})
    {:noreply, ctx}
  end

  asset "main.js" do
    """
    export async function init(ctx, attrs) {
      await ctx.importCSS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/css/xterm.css");
      await ctx.importJS("https://cdn.jsdelivr.net/npm/xterm@5.0.0/lib/xterm.min.js");

      ctx.root.innerHTML = `
        <div id="k8s-terminal">
          <div class="k8s-xtermjs-container"></div>
        </div>
      `;

      const k8s_xterm = new Terminal({convertEol: true});
      k8s_xterm.onKey((key) => ctx.pushEvent("key", key.key));
      k8s_xterm.open(ctx.root.querySelector(".k8s-xtermjs-container"));
      ctx.handleEvent("print-terminal", (data) => k8s_xterm.write(data));
      ctx.handleEvent("dispose-terminal", () => k8s_xterm.dispose());
      k8s_xterm.write(attrs.buffer);
    }
    """
  end
end
