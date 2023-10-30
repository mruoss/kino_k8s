defmodule KinoK8s.GetCell do
  @moduledoc false

  use Kino.JS, assets_path: "lib/assets/get_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Get / List / Watch Resources"

  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

  @default_request_type "get"
  @request_types ["get", "list", "watch"]
  @result_types %{"get" => nil, "list" => ["list", "stream"], "watch" => ["stream"]}

  @impl true
  def init(attrs, ctx) do
    ctx =
      assign(ctx,
        mix_env: Mix.env(),
        connections: [],
        connection: nil,
        result_variable: Kino.SmartCell.prefixed_var_name("result", attrs["result_variable"]),
        request_types: @request_types,
        request_type: attrs["request_type"] || @default_request_type,
        result_types: @result_types,
        result_type: nil,
        gvk: attrs["gvk"],
        namespaces: attrs["namespaces"],
        namespace: attrs["namespace"],
        resources: attrs["resources"],
        resource: attrs["resource"]
      )

    {:ok, ctx}
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  def handle_event("update_connection", variable, ctx) do
    connection = Enum.find(ctx.assigns.connections, &(&1.variable == variable))

    {
      :noreply,
      ctx
      |> assign(connection: connection)
      |> set_gvk(nil)
      |> broadcast_update()
    }
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
    case perform_search(search_term, ctx.assigns.connection.conn_hash) do
      [gvk] ->
        {:noreply, ctx |> set_gvk(gvk) |> broadcast_update()}

      search_result_items ->
        send_event(ctx, ctx.origin, "update", %{
          search_result_items: search_result_items,
          gvk: nil
        })

        {:noreply, ctx}
    end
  end

  def handle_event("update_gvk", gvk, ctx) do
    {:noreply, ctx |> set_gvk(gvk) |> broadcast_update()}
  end

  def handle_event("update_namespace", namespace, ctx) do
    {:noreply,
     ctx
     |> assign(namespace: namespace)
     |> set_resources()
     |> broadcast_update()}
  end

  def handle_event("update_resource", resource, ctx) do
    {:noreply,
     ctx
     |> assign(resource: resource)
     |> broadcast_update()}
  end

  def handle_event("update_request_type", request_type, ctx) do
    result_type = @result_types[request_type] |> List.wrap() |> List.first()

    {:noreply,
     ctx
     |> assign(request_type: request_type, result_type: result_type)
     |> set_namespaces()
     |> broadcast_update()}
  end

  def handle_event("update_result_type", result_type, ctx) do
    {:noreply,
     ctx
     |> assign(result_type: result_type)
     |> broadcast_update()}
  end

  @impl true
  def handle_info({:connections, connections}, ctx) do
    {:noreply,
     ctx
     |> assign(
       connections: connections,
       connection: ctx.assigns.connection || List.first(connections)
     )
     |> set_gvk(ctx.assigns.gvk)
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

  defp set_gvk(ctx, _) when is_nil(ctx.assigns.connection) do
    ctx
    |> assign(gvk: nil)
    |> set_namespaces()
  end

  defp set_gvk(ctx, gvk) do
    send_event(ctx, ctx.origin, "update", %{search_term: "", search_result_items: []})

    ctx
    |> assign(gvk: gvk)
    |> set_namespaces()
  end

  defp broadcast_update(ctx) do
    broadcast_event(ctx, "update", get_js_attrs(ctx))
    ctx
  end

  @impl true
  def to_attrs(ctx), do: get_js_attrs(ctx)

  defp get_js_attrs(ctx) do
    Map.new(ctx.assigns, fn {key, value} -> {Atom.to_string(key), value} end)
  end

  @impl true
  def to_source(%{"request_type" => "get"} = attrs) do
    if all_fields_filled?(attrs, ["connection", "result_variable", "gvk", "resource"]) do
      %{
        "connection" => connection,
        "result_variable" => result_variable,
        "namespace" => namespace,
        "resource" => resource
      } = attrs

      %{"api_version" => api_version, "name" => gvk_name} = attrs["gvk"]

      path_params =
        if is_nil(namespace), do: [name: resource], else: [name: resource, namespace: namespace]

      quote do
        {:ok, unquote(quoted_var(result_variable))} =
          K8s.Client.get(unquote(api_version), unquote(gvk_name), unquote(path_params))
          |> K8s.Client.put_conn(unquote(quoted_var(connection.variable)))
          |> K8s.Client.run()

        unquote(quoted_var(result_variable)) |> Ymlr.document!() |> IO.puts()
      end
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
  end

  def to_source(attrs) do
    if all_fields_filled?(attrs, [
         "connection",
         "result_variable",
         "request_type",
         "result_type",
         "gvk"
       ]) do
      %{
        "connection" => connection,
        "result_variable" => result_variable,
        "request_type" => request_type,
        "result_type" => result_type,
        "namespace" => namespace
      } = attrs

      %{"api_version" => api_version, "name" => gvk_name} = attrs["gvk"]

      path_params =
        case namespace do
          "__ALL__" -> [namespace: :all]
          nil -> []
          other -> [namespace: other]
        end

      request_method =
        case request_type do
          "get" -> quote do: :get
          "list" -> quote do: :list
          "watch" -> quote do: :watch
        end

      run_method =
        case result_type do
          "list" -> quote do: :run
          "stream" -> quote do: :stream
        end

      quote do
        {:ok, unquote(quoted_var(result_variable))} =
          K8s.Client.unquote(request_method)(
            unquote(api_version),
            unquote(gvk_name),
            unquote(path_params)
          )
          |> K8s.Client.put_conn(unquote(quoted_var(connection.variable)))
          |> K8s.Client.unquote(run_method)()

        unquote(quoted_var(result_variable))
      end
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
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

  defp set_namespaces(ctx) when is_nil(ctx.assigns.gvk) do
    ctx
    |> assign(namespaces: nil, namespace: nil)
    |> set_resources()
  end

  defp set_namespaces(%{:assigns => %{:gvk => %{"namespaced" => false}}} = ctx) do
    assign(ctx, namespaces: nil, namespace: nil)
    |> set_resources()
  end

  defp set_namespaces(ctx) do
    with {:ok, namespaces} <- K8sHelper.namespaces(conn(ctx)) do
      namespaces =
        if ctx.assigns.request_type == "get", do: namespaces, else: ["__ALL__" | namespaces]

      namespace =
        if ctx.assigns.namespace in namespaces,
          do: ctx.assigns.namespace,
          else: List.first(namespaces)

      ctx
      |> assign(namespaces: namespaces, namespace: namespace)
      |> set_resources()
    else
      _ -> ctx
    end
  end

  defp set_resources(ctx)
       when is_nil(ctx.assigns.namespace) or ctx.assigns.request_type != "get" do
    assign(ctx, resources: nil, resource: nil)
  end

  defp set_resources(ctx) do
    namespace = ctx.assigns.namespace
    gvk = ctx.assigns.gvk

    with {:ok, resources} <-
           K8sHelper.resources(conn(ctx), gvk["api_version"], gvk["kind"], namespace) do
      resource =
        if ctx.assigns.resource in resources,
          do: ctx.assigns.resource,
          else: List.first(resources)

      ctx
      |> assign(resources: resources, resource: resource)
    else
      _ -> ctx
    end
  end

  defp all_fields_filled?(attrs, keys) do
    not Enum.any?(keys, fn key -> attrs[key] in [nil, ""] end)
  end

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}

  defp conn(ctx) do
    ResourceGVKCache.get_conn(ctx.assigns.connection.conn_hash)
  end
end
