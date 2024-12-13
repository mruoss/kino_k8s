defmodule KinoK8s.KubernetesClientCell do
  @moduledoc false

  use Kino.JS, assets_path: "lib/assets/get_cell/build"
  use Kino.JS.Live
  use Kino.SmartCell, name: "Kubernetes Client"

  alias KinoK8s.SmartCellHelper
  alias KinoK8s.ResourceGVKCache
  alias KinoK8s.K8sHelper

  @default_operation "get"
  @read_operations ["get", "list", "watch"]
  @write_operations ["apply", "create", "update"]
  @connect_operations ["exec", "logs"]
  @single_resource_operations ["get", "exec", "logs"]
  @gvk_pod %{"api_version" => "v1", "kind" => "Pod", "namespaced" => true}

  @default_body """
  kind: ConfigMap
  apiVersion: v1
  metadata:
    name: kino-k8s-cm
    namespace: default
  data:
    key: default\
  """

  @impl true
  def init(attrs, ctx) do
    kubeconfig = Kubereq.Kubeconfig.load(Kubereq.Kubeconfig.Default)

    fields = %{
      "result_variable" => Kino.SmartCell.prefixed_var_name("result", attrs["result_variable"]),
      "contexts" => Enum.map(kubeconfig.contexts, & &1["name"]),
      "context" => attrs["context"] || kubeconfig.current_context,
      "operations" => @read_operations ++ @write_operations ++ @connect_operations,
      "operation" => attrs["operation"] || @default_operation,
      "gvk" => attrs["gvk"],
      "namespaces" => attrs["namespaces"],
      "namespace" => attrs["namespace"],
      "resources" => attrs["resources"],
      "resource" => attrs["resource"],
      "containers" => attrs["containers"],
      "container" => attrs["container"]
    }

    ctx =
      assign(ctx,
        req: Req.new() |> Kubereq.attach(kubeconfig: kubeconfig),
        fields: fields,
        body: attrs["body"] || @default_body
      )
      |> update_field("context")

    {:ok, ctx,
     editor: [
       source: ctx.assigns.body,
       language: "yaml",
       visible: fields["operation"] in @write_operations
     ]}
  end

  @impl true
  def handle_connect(ctx) do
    payload = %{fields: ctx.assigns.fields, connection_state: %{"state" => "ok"}}
    {:ok, payload, ctx}
  end

  @impl true
  def handle_editor_change(source, ctx) do
    {:ok, assign(ctx, body: source)}
  end

  @impl true
  def handle_event("update_field", %{"field" => field, "value" => value}, ctx) do
    ctx =
      case validate_update_field(ctx, field, value) do
        :ok ->
          ctx
          |> broadcast_update(%{field => value})
          |> update_field(field)

        :error ->
          ctx
      end

    {:noreply, ctx}
  end

  defp validate_update_field(ctx, "context", context) do
    send_event(ctx, ctx.origin, "connectionState", %{"state" => "loading"})

    if Kubereq.can_i?(
         ctx.assigns.req,
         [
           verb: "create",
           version: "authorization.k8s.io/v1",
           resource: "selfsubjectaccessreviews"
         ],
         context: context
       ) do
      send_event(ctx, ctx.origin, "connectionState", %{"state" => "ok"})
      :ok
    else
      send_event(ctx, ctx.origin, "connectionState", %{
        "message" =>
          ~s(Failed to establish a connection to the cluster of the context "#{context}"),
        "state" => "error"
      })

      :error
    end
  end

  defp validate_update_field(_ctx, _field, _value), do: :ok

  defp update_field(ctx, "operation") do
    operation = ctx.assigns.fields["operation"]

    ctx =
      if operation in @connect_operations do
        ctx
        |> broadcast_update(%{"gvk" => @gvk_pod})
        |> update_field("gvk")
      else
        update_field(
          ctx,
          "gvk"
        )
      end

    reconfigure_smart_cell(ctx, editor: [visible: operation in @write_operations])
  end

  defp update_field(ctx, "context") do
    context = ctx.assigns.fields["context"]
    ctx = update_in(ctx.assigns.req, &Req.merge(&1, context: context))

    ResourceGVKCache.init_cache(context)
    update_field(ctx, "gvk")
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
              if ctx.assigns.fields["operation"] in @single_resource_operations,
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
    operation = ctx.assigns.fields["operation"]
    resource = ctx.assigns.fields["resource"]

    if is_nil(namespace) or operation not in @single_resource_operations do
      ctx
      |> broadcast_update(%{"resources" => nil, "resource" => nil})
      |> update_field("resource")
    else
      with {:ok, resources} <-
             K8sHelper.resources(ctx.assigns.req, gvk["api_version"], gvk["kind"], namespace) do
        resource =
          if resource in resources,
            do: resource,
            else: List.first(resources)

        ctx
        |> broadcast_update(%{"resources" => resources, "resource" => resource})
        |> update_field("resource")
      else
        _other ->
          ctx
          |> broadcast_update(%{"resources" => [], "resource" => nil})
          |> update_field("resource")
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

        ctx
    end
  end

  defp update_field(ctx, "resource") do
    if not is_nil(ctx.assigns.fields["resource"]) and
         ctx.assigns.fields["operation"] in @connect_operations do
      {:ok, containers} =
        K8sHelper.containers(
          ctx.assigns.req,
          ctx.assigns.fields["namespace"],
          ctx.assigns.fields["resource"]
        )

      broadcast_update(ctx, %{"container" => List.first(containers), "containers" => containers})
    else
      broadcast_update(ctx, %{"container" => nil, "containers" => nil})
      ctx
    end
  end

  defp update_field(ctx, _field), do: ctx

  defp broadcast_update(ctx, fields_to_update) do
    broadcast_event(ctx, "update", %{"fields" => fields_to_update})
    update(ctx, :fields, &Map.merge(&1, fields_to_update))
  end

  @impl true
  def to_attrs(%{assigns: assigns}) do
    assigns.fields
    |> Map.put("body", assigns.body)
  end

  @impl true
  def to_source(attrs) do
    required_keys =
      case attrs["operation"] do
        "get" -> ["result_variable", "gvk", "resource", "namespace"]
        "list" -> ["result_variable", "gvk"]
        "watch" -> ["result_variable", "gvk"]
        type when type in @write_operations -> ["result_variable", "body"]
        type when type in @connect_operations -> ["resource", "namespace"]
      end

    if all_fields_filled?(attrs, required_keys) do
      attrs
      |> to_quoted()
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
  end

  defp to_quoted(%{"operation" => "get"} = attrs) do
    quote do
      req = unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.get!(req, unquote(attrs["namespace"]), unquote(attrs["resource"]))

      Kino.Tree.new(unquote(quoted_var(attrs["result_variable"])))
    end
  end

  defp to_quoted(%{"operation" => "list"} = attrs) do
    attrs =
      Map.update!(attrs, "namespace", fn
        "__ALL__" -> nil
        other -> other
      end)

    quote do
      req = unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.list!(req, unquote(attrs["namespace"]))

      keys = ["namespace", "name", "resourceVersion", "creationTimestamp"]

      unquote(quoted_var(attrs["result_variable"]))["items"]
      |> Enum.map(&Map.take(&1["metadata"], keys))
      |> Kino.DataTable.new(
        name:
          "#{unquote(quoted_var(attrs["result_variable"]))["kind"]} (ResourceVersion: #{unquote(quoted_var(attrs["result_variable"]))["metadata"]["resourceVersion"]})",
        keys: keys
      )
    end
  end

  defp to_quoted(%{"operation" => "watch"} = attrs) do
    attrs =
      Map.update!(attrs, "namespace", fn
        "__ALL__" -> nil
        other -> other
      end)

    quote do
      req = unquote(quoted_req(attrs))

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        Kubereq.watch!(req, unquote(attrs["namespace"]))

      unquote(quoted_var(attrs["result_variable"]))
    end
  end

  defp to_quoted(%{"operation" => type} = attrs) when type in @write_operations do
    body_ast = {:sigil_y, [delimiter: ~S["""]], [{:<<>>, [], [attrs["body"] <> "\n"]}, []]}

    function =
      case type do
        "apply" -> quote do: Kubereq.apply!(body)
        "create" -> quote do: Kubereq.create!(body)
        "update" -> quote do: Kubereq.update!(body)
      end

    quote do
      import YamlElixir.Sigil
      body = unquote(body_ast)

      %{body: unquote(quoted_var(attrs["result_variable"]))} =
        unquote(quoted_req(attrs))
        |> unquote(function)

      Kino.Tree.new(unquote(quoted_var(attrs["result_variable"])))
    end
  end

  defp to_quoted(%{"operation" => type} = attrs) when type in @connect_operations do
    connect =
      case type do
        "logs" ->
          quote do
            fn into ->
              req = unquote(quoted_req(attrs))

              Kino.start_child!({
                Kubereq.PodLogs,
                req: req,
                into: into,
                namespace: unquote(attrs["namespace"]),
                name: unquote(attrs["resource"]),
                container: unquote(attrs["container"])
              })

              &Function.identity/1
            end
          end

        "exec" ->
          quote do
            fn into ->
              req = unquote(quoted_req(attrs))

              dest =
                Kino.start_child!({
                  Kubereq.PodExec,
                  req: req,
                  namespace: unquote(attrs["namespace"]),
                  name: unquote(attrs["resource"]),
                  container: unquote(attrs["container"]),
                  into: into,
                  command: ["/bin/sh"],
                  tty: true
                })

              &Kubereq.PodExec.send_stdin(dest, &1)
            end
          end
      end

    quote do
      connect = unquote(connect)
      KinoK8s.KinoTerminal.open(connect)
    end
  end

  defp quoted_req(attrs) do
    quote do
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
