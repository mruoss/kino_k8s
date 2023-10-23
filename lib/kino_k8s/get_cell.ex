defmodule KinoK8s.GETCell do
  alias KinoK8s.ResourceGVKCache
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
  def handle_event("update_search_term", search_term, ctx) do
    case perform_search(search_term) do
      [gvk] ->
        handle_event("update_gvk", gvk, ctx)

      search_result_items ->
        send_event(ctx, ctx.origin, "update", %{
          search_result_items: search_result_items,
          gvk: nil
        })

        {:noreply, ctx}
    end
  end

  def handle_event("update_gvk", gvk, ctx) do
    send_event(ctx, ctx.origin, "update", %{search_result_items: []})

    {
      :noreply,
      ctx
      |> assign(gvk: gvk)
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

  defp perform_search(search_term) do
    if byte_size(search_term) < 3 do
      []
    else
      search_terms = String.split(search_term, ~r/\W/)

      ResourceGVKCache.get_gvks()
      |> Enum.filter(fn res -> Enum.all?(search_terms, &String.contains?(res.index, &1)) end)
    end
  end

  # defp set_namespaces(ctx, nil), do: assign(ctx, namespaces: [], namespace: nil) |> set_pods(nil)

  # defp set_namespaces(ctx, conn) do
  #   with {:ok, namespaces} <- K8sHelpers.namespaces(conn) do
  #     namespace = List.first(namespaces)

  #     ctx
  #     |> assign(namespaces: namespaces, namespace: namespace)
  #     |> set_pods(namespace)
  #   else
  #     _ -> ctx
  #   end
  # end

  # defp set_pods(ctx, nil), do: assign(ctx, pods: [], pod: nil)

  # defp set_pods(ctx, namespace) do
  #   with {:ok, pods} <- K8sHelpers.pods(ctx.assigns.conn, namespace) do
  #     pod = List.first(pods)

  #     ctx
  #     |> assign(pods: pods, pod: pod)

  #   else
  #     _ -> ctx
  #   end
  # end
end
