defmodule KinoK8s.GetCell do
  @moduledoc false

  use Kino.JS, assets_path: "lib/assets/get_cell/build"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Get / List / Watch Resources"

  alias KinoK8s.SmartCellHelper
  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

  @default_request_type "get"
  @request_types ["get", "list", "watch"]

  @impl true
  def init(fields, ctx) do
    kubeconfig = Kubereq.Kubeconfig.load(Kubereq.Kubeconfig.Default)

    fields = %{
      "result_variable" => Kino.SmartCell.prefixed_var_name("result", fields["result_variable"]),
      "contexts" => Enum.map(kubeconfig.contexts, & &1["name"]),
      "context" => fields["context"] || kubeconfig.current_context,
      "request_types" => @request_types,
      "request_type" => fields["request_type"] || @default_request_type,
      "gvk" => fields["gvk"],
      "namespaces" => fields["namespaces"],
      "namespace" => fields["namespace"],
      "resources" => fields["resources"],
      "resource" => fields["resource"]
    }

    ctx =
      assign(ctx,
        req: Req.new() |> Kubereq.attach(kubeconfig: kubeconfig),
        fields: fields
      )
      |> update_field("context")

    {:ok, ctx}
  end

  @impl true
  def handle_connect(ctx) do
    payload = %{fields: ctx.assigns.fields}
    {:ok, payload, ctx}
  end

  @impl true
  def handle_event("update_field", %{"field" => field, "value" => value}, ctx) do
    ctx =
      ctx
      |> update(:fields, &Map.merge(&1, %{field => value}))
      |> update_field(field)

    {:noreply, ctx}
  end

  defp update_field(ctx, "request_type"), do: ctx

  defp update_field(ctx, "context") do
    ResourceGVKCache.init_cache(ctx.assigns.fields["context"])

    ctx
    |> broadcast_update(%{"gvk" => nil})
    |> update_field("gvk")
  end

  defp update_field(ctx, "gvk") do
    ctx =
      if ctx.assigns.fields["gvk"] == nil or ctx.assigns.fields["gvk"]["namespaced"] == nil do
        broadcast_update(ctx, %{
          "namespaces" => nil,
          "namespace" => nil,
          "search_term" => "",
          "search_result_items" => []
        })
      else
        send_event(ctx, ctx.origin, "update", %{
          "fields" => %{"search_term" => "", "search_result_items" => []}
        })

        new_fields =
          ctx
          |> SmartCellHelper.get_namespaces()
          |> Map.update!("namespaces", fn
            [] ->
              []

            namespaces ->
              if ctx.assigns.fields["request_type"] == "get",
                do: namespaces,
                else: ["__ALL__" | namespaces]
          end)

        broadcast_update(ctx, new_fields)
      end

    update_field(ctx, "namespace")
  end

  defp update_field(ctx, "namespace") do
    namespace = ctx.assigns.fields["namespace"]
    gvk = ctx.assigns.fields["gvk"]
    request_type = ctx.assigns.fields["request_type"]
    resource = ctx.assigns.fields["resource"]

    if is_nil(namespace) or request_type != "get" do
      broadcast_update(ctx, %{"resources" => nil, "resource" => ""})
    else
      with {:ok, resources} <-
             K8sHelper.resources(ctx.assigns.req, gvk["api_version"], gvk["kind"], namespace) do
        resource =
          if resource in resources,
            do: resource,
            else: List.first(resources)

        broadcast_update(ctx, %{"resources" => resources, "resource" => resource})
      else
        _other ->
          broadcast_update(ctx, %{"resources" => [], "resource" => ""})
      end
    end
  end

  defp update_field(ctx, "search_term") do
    %{"search_term" => search_term} = ctx.assigns.fields

    case perform_search(ctx.assigns.fields["context"], search_term) do
      [gvk] ->
        ctx
        |> broadcast_update(%{"gvk" => gvk})
        |> update_field("gvk")

      search_result_items ->
        send_event(ctx, ctx.origin, "update", %{
          "fields" => %{"search_result_items" => search_result_items, "gvk" => nil}
        })
    end

    ctx
  end

  defp update_field(ctx, _field), do: ctx

  defp broadcast_update(ctx, fields_to_update) do
    broadcast_event(ctx, "update", %{"fields" => fields_to_update})
    update(ctx, :fields, &Map.merge(&1, fields_to_update))
  end

  @impl true
  def to_attrs(%{assigns: %{fields: fields}}) do
    Map.take(fields, ["request_type", "result_variable", "gvk", "resource", "namespace"])
  end

  @impl true
  def to_source(attrs) do
    required_keys =
      case attrs["request_type"] do
        "get" -> ["result_variable", "gvk", "resource", "namespace"]
        "list" -> ["result_variable", "gvk"]
        "watch" -> ["result_variable", "gvk"]
      end

    if all_fields_filled?(attrs, required_keys) do
      attrs
      |> Map.update!("namespace", fn
        "__ALL__" -> nil
        other -> other
      end)
      |> to_quoted()
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
  end

  defp to_quoted(%{"request_type" => "get"} = attrs) do
    quote do
      unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.get!(req, unquote(attrs["namespace"]), unquote(attrs["resource"]))

      Kino.Tree.new(unquote(quoted_var(attrs["result_variable"])))
    end
  end

  defp to_quoted(%{"request_type" => "list"} = attrs) do
    quote do
      unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.list!(req, unquote(attrs["namespace"]))

      keys = ["namespace", "name", "resourceVersion", "creationTimestamp"]

      unquote(quoted_var(attrs["result_variable"]))["items"]
      |> Enum.map(&Map.take(&1["metadata"], keys))
      |> Kino.DataTable.new(
        name: unquote(quoted_var(attrs["result_variable"]))["kind"],
        keys: keys
      )
    end
  end

  defp to_quoted(%{"request_type" => "watch"} = attrs) do
    quote do
      unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.watch!(req, unquote(attrs["namespace"]))

      unquote(quoted_var(attrs["result_variable"]))
    end
  end

  defp quoted_req(attrs) do
    quote do
      req =
        Req.new()
        |> Kubereq.attach(
          context: unquote(attrs["context"]),
          api_version: unquote(attrs["gvk"]["api_version"]),
          kind: unquote(attrs["gvk"]["kind"])
        )
    end
  end

  defp perform_search(context, search_term) do
    if byte_size(search_term) < 3 do
      []
    else
      search_terms = String.split(search_term, ~r/\W/)

      ResourceGVKCache.get_gvks(context)
      |> Enum.filter(fn res -> Enum.all?(search_terms, &String.contains?(res["index"], &1)) end)
    end
  end

  defp all_fields_filled?(fields, keys) do
    not Enum.any?(keys, fn key -> fields[key] in [nil, ""] end)
  end

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}
end
