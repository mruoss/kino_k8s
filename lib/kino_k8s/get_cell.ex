defmodule KinoK8s.GETCell do
  use Kino.JS, assets_path: "lib/assets/get_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "GET Resource"

  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

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
        {:ok, assign(ctx, kubeconfig: kubeconfig, method: :GET)}
    end
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def handle_event("update_method", method, ctx) do
    {:noreply, assign(ctx, method: String.to_existing_atom(method))}
  end

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
      |> set_namespaces(gvk)
      |> broadcast_update()
    }
  end

  def handle_event("update_namespace", namespace, ctx) do
    {:noreply,
     ctx
     |> assign(namespace: namespace)
     |> set_resources(namespace)
     |> broadcast_update()}
  end

  def handle_event("update_resource", resource, ctx) do
    {:noreply,
     ctx
     |> assign(resource: resource)
     |> broadcast_update()}
  end

  defp conn(ctx) do
    {:ok, conn} = K8s.Conn.from_file(ctx.assigns.kubeconfig, insecure_skip_tls_verify: true)
    conn
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
  def to_source(%{method: :GET, gvk: gvk, resource: resource, namespace: namespace} = attrs) do
    kubeconfig = attrs.kubeconfig
    %{"api_version" => api_version, "name" => gvk_name} = gvk

    quote do
      {:ok, conn} = K8s.Conn.from_file(unquote(kubeconfig), insecure_skip_tls_verify: true)

      {:ok, resource} = K8s.Client.get(unquote(api_version), unquote(gvk_name),
        namespace: unquote(namespace),
        name: unquote(resource)
      )
      |> K8s.Client.put_conn(conn)
      |> K8s.Client.run()
    end
    |> Kino.SmartCell.quoted_to_string()
  end

  def to_source(_attrs) do
    Kino.SmartCell.quoted_to_string(nil)
  end

  defp perform_search(search_term) do
    if byte_size(search_term) < 3 do
      []
    else
      search_terms = String.split(search_term, ~r/\W/)

      ResourceGVKCache.get_gvks()
      |> Enum.filter(fn res -> Enum.all?(search_terms, &String.contains?(res["index"], &1)) end)
    end
  end

  defp set_namespaces(ctx, %{"namespaced" => false}), do: set_resources(ctx, nil)

  defp set_namespaces(ctx, _gvk) do
    with {:ok, namespaces} <- K8sHelper.namespaces(conn(ctx)) do
      namespace = List.first(namespaces)

      ctx
      |> assign(namespaces: namespaces, namespace: namespace)
      |> set_resources(namespace)
    else
      _ -> ctx
    end
  end

  defp set_resources(ctx, namespace) do
    gvk = ctx.assigns.gvk

    with {:ok, resources} <-
           K8sHelper.resources(conn(ctx), gvk["api_version"], gvk["kind"], namespace) do
      resource = List.first(resources)

      ctx
      |> assign(resources: resources, resource: resource)
    else
      _ -> ctx
    end
  end
end
