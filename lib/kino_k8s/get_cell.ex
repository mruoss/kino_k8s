defmodule KinoK8s.GETCell do
  use Kino.JS, assets_path: "lib/assets/get_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "GET Resource"

  @impl true
  def init(attrs, ctx) do
    kubeconfig = System.get_env("KUBECONFIG")
    ctx = assign(ctx, mix_env: Mix.env())

    cond do
      is_nil(kubeconfig) ->
        {:ok,
         assign(ctx,
           error:
             "KUBECONFIG is not defined. You have to define an ENV variable called KUBECONFIG pointing to the kube config file."
         )}

      not File.exists?(kubeconfig) ->
        {:ok,
         assign(ctx,
           error:
             "The file #{kubeconfig} defined by the KBUECONFIG ENV variable was not found on your system."
         )}

      :otherwise ->
        {:ok, assign(ctx, kubeconfig: kubeconfig)}
    end
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def handle_event("update_search_term", value, ctx) do
    {
      :noreply,
      ctx
      |> assign(search_term: value)
      |> assign(search_result_timestamp: :os.system_time(:second))
      |> broadcast_update()
    }
  end

  defp broadcast_update(ctx) do
    broadcast_event(ctx, "update", get_js_attrs(ctx))
    ctx
  end

  @impl true
  def to_attrs(ctx) do
    ctx.assigns
  end

  defp get_js_attrs(ctx) do
    ctx.assigns
  end

  @impl true
  def to_source(attrs) do
    case attrs do
      %{kubeconfig: kubeconfig} ->
        quote do
          K8s.Conn.from_file(unquote(kubeconfig))
        end
        |> Kino.SmartCell.quoted_to_string()

      _ ->
        []
    end
  end
end
