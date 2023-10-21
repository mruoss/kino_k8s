defmodule KinoK8s.GETCell do
  alias KinoK8s.ResourceCache
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

  def handle_event("update_search_term", search_term, ctx) do
    {
      :noreply,
      ctx
      |> assign(resource: nil)
      |> assign(search_term: search_term)
      |> assign(search_result_timestamp: :os.system_time(:second))
      |> assign(search_result_items: perform_search(search_term))
      |> broadcast_update()
    }
  end

  def handle_event("update_resource", resource, ctx) do
    {:noreply,
     ctx
     |> assign(resource: resource)
     |> assign(search_result_items: [])
     |> broadcast_update()}
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
    |> Map.put_new(:search_result_items, [])
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

  defp perform_search(search_term) do
    if byte_size(search_term) < 3 do
      []
    else
      search_terms = String.split(search_term, ~r/\W/)

      ResourceCache.get_resources()
      |> Enum.filter(fn res -> Enum.all?(search_terms, &String.contains?(res.index, &1)) end)
    end
  end
end
