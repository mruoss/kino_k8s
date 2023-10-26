defmodule KinoK8s.GETCell do
  use Kino.JS, assets_path: "lib/assets/get_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "GET Resource"

  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

  @impl true
  def init(attrs, ctx) do
    kubeconfig = Map.get(attrs, "kubeconfig", System.get_env("KUBECONFIG"))
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
        {:ok, conn} = K8s.Conn.from_file(kubeconfig, insecure_skip_tls_verify: true)
        conn_hash = ResourceGVKCache.init_cache(conn)

        ctx =
          assign(ctx,
            gvk: attrs["gvk"],
            namespaces: attrs["namespaces"],
            namespace: attrs["namespace"],
            resources: attrs["resources"],
            resource: attrs["resource"],
            conn_hash: conn_hash,
            result_variable:
              Kino.SmartCell.prefixed_var_name("k8s_resource", attrs["result_variable"])
          )

        {:ok, ctx}
    end
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def handle_event("update_result_variable", variable, ctx) do
    ctx =
      if Kino.SmartCell.valid_variable_name?(variable) do
        assign(ctx, result_variable: variable)
      else
        ctx
      end

    {:noreply, broadcast_update(ctx)}
  end

  def handle_event("update_search_term", search_term, ctx) do
    case perform_search(search_term, ctx.assigns.conn_hash) do
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
  def to_source(attrs)
      when not (is_nil(attrs.gvk) or is_nil(attrs.resource)) do
    %{
      conn_hash: conn_hash,
      result_variable: result_variable,
      namespace: namespace,
      resource: resource
    } = attrs

    %{"api_version" => api_version, "name" => gvk_name} = attrs.gvk

    path_params =
      if is_nil(namespace), do: [name: resource], else: [name: resource, namespace: namespace]

    quote do
      conn = KinoK8s.ResourceGVKCache.get_conn(unquote(conn_hash))

      {:ok, unquote(quoted_var(result_variable))} =
        K8s.Client.get(unquote(api_version), unquote(gvk_name), unquote(path_params))
        |> K8s.Client.put_conn(conn)
        |> K8s.Client.run()

      unquote(quoted_var(result_variable)) |> Ymlr.document!() |> IO.puts()
    end
    |> Kino.SmartCell.quoted_to_string()
  end

  def to_source(_attrs) do
    Kino.SmartCell.quoted_to_string(nil)
  end

  defp perform_search(search_term, conn_hash) do
    if byte_size(search_term) < 3 do
      []
    else
      search_terms = String.split(search_term, ~r/\W/)

      ResourceGVKCache.get_gvks(conn_hash)
      |> Enum.filter(fn res -> Enum.all?(search_terms, &String.contains?(res["index"], &1)) end)
    end
  end

  defp set_namespaces(ctx, %{"namespaced" => false}) do
    ctx
    |> assign(namespaces: nil, namespace: nil)
    |> set_resources(nil)
  end

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

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}

  defp conn(ctx) do
    conn = ResourceGVKCache.get_conn(ctx.assigns.conn_hash)
    conn
  end
end
