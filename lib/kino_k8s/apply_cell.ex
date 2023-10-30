defmodule KinoK8s.ApplyCell do
  use Kino.JS, assets_path: "lib/assets/apply_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Create / Update / Apply Resource"

  alias KinoK8s.ResourceGVKCache

  @default_body """
  kind: ConfigMap
  apiVersion: v1
  metadata:
    name: kino-k8s-cm
    namespace: default
  data:
    key: default
  """

  @available_methods ["apply", "create", "update"]

  @impl true
  @spec init(nil | maybe_improper_list() | map(), Kino.JS.Live.Context.t()) ::
          {:ok, Kino.JS.Live.Context.t(), [{:editor, [...]}, ...]}
  def init(attrs, ctx) do
    ctx =
      assign(ctx,
        connections: [],
        connection: nil,
        method: attrs[:method] || "apply",
        methods: @available_methods,
        result_variable:
          Kino.SmartCell.prefixed_var_name("applied_resource", attrs["result_variable"])
      )

    {:ok, ctx, editor: [attribute: :body, language: "yaml", default_source: @default_body]}
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, get_js_attrs(ctx), ctx}
  end

  @impl true
  @spec handle_info({:connections, list()}, Kino.JS.Live.Context.t()) ::
          {:noreply, Kino.JS.Live.Context.t()}
  def handle_info({:connections, connections}, ctx) do
    connection = List.first(connections)

    {:noreply,
     ctx
     |> assign(connections: connections, connection: ctx.assigns.connection || connection)
     |> broadcast_update()}
  end

  @impl true
  def handle_event("update_connection", variable, ctx) do
    connection = Enum.find(ctx.assigns.connections, &(&1.variable == variable))
    {:noreply, ctx |> assign(connection: connection) |> broadcast_update}
  end

  def handle_event("update_result_variable", variable, ctx) do
    ctx =
      if Kino.SmartCell.valid_variable_name?(variable) do
        assign(ctx, result_variable: variable)
      else
        ctx
      end

    {:noreply, broadcast_update(ctx)}
  end

  def handle_event("update_method", method, ctx) do
    {:noreply, ctx |> assign(method: method) |> broadcast_update()}
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
    if all_fields_filled?(attrs, [:connection, :result_variable, :body, :method]) do
      %{
        connection: connection,
        method: method,
        result_variable: result_variable,
        body: body
      } = attrs

      method_expr =
        case method do
          "apply" -> quote do: K8s.Client.apply()
          "create" -> quote do: K8s.Client.create()
          "update" -> quote do: K8s.Client.update()
        end

      quote do
        import YamlElixir.Sigil

        {:ok, unquote(quoted_var(result_variable))} =
          unquote(quoted_body(body))
          |> unquote(method_expr)
          |> K8s.Client.put_conn(unquote(quoted_var(connection.variable)))
          |> K8s.Client.run()

        unquote(quoted_var(result_variable)) |> Ymlr.document!() |> IO.puts()
      end
      |> Kino.SmartCell.quoted_to_string()
    else
      ""
    end
  end

  defp all_fields_filled?(attrs, keys) do
    not Enum.any?(keys, fn key -> attrs[key] in [nil, ""] end)
  end

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}

  defp quoted_body(body) do
    {:sigil_y, [delimiter: "\"\"\""], [{:<<>>, [indentation: 0], [body]}, []]}
  end
end
