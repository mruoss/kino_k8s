defmodule KinoK8s.ConnectionCell do
  @moduledoc false

  use Kino.JS, assets_path: "lib/assets/connection_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "K8s - Cluster Connection"

  alias KinoK8s.ResourceGVKCache

  @default_source_type "file"
  @default_file "~/.kube/config"
  @default_env "KUBECONFIG"

  @impl true
  def init(attrs, ctx) do
    ctx =
      assign(ctx,
        result_variable: Kino.SmartCell.prefixed_var_name("conn", attrs["result_variable"]),
        source_type: attrs["source_type"] || @default_source_type,
        source: attrs["source"] || @default_file,
        opts: attrs["opts"] || %{"insecure_skip_tls_verify" => true}
        # running_on_k8s: File.exists?("/var/run/secrets/kubernetes.io/serviceaccount"),
      )

    {:ok, ctx}
  end

  @impl true
  def to_source(attrs) do
    required_keys =
      case attrs["source_type"] do
        "file" -> ["result_variable", "source_type", "source", "opts"]
        "env" -> ["result_variable", "source_type", "source", "opts"]
        "k8s" -> ["result_variable", "source_type", "opts"]
      end

    if all_fields_filled?(attrs, required_keys) do
      %{
        "result_variable" => result_variable,
        "source" => source,
        "source_type" => source_type,
        "opts" => opts
      } =
        attrs

      opts =
        opts
        |> Map.filter(fn {_, value} -> value !== false end)
        |> Map.take(["context", "insecure_skip_tls_verify"])
        |> Enum.map(fn {key, value} -> {String.to_atom(key), value} end)

      expr =
        case source_type do
          "file" -> quote do: K8s.Conn.from_file(unquote(source), unquote(opts))
          "env" -> quote do: K8s.Conn.from_env(unquote(source), unquote(opts))
          "k8s" -> quote do: K8s.Conn.from_service_account(unquote(opts))
        end

      Kino.SmartCell.quoted_to_string(
        quote do: {:ok, unquote(quoted_var(result_variable))} = unquote(expr)
      )
    else
      ""
    end
  end

  @impl true
  def scan_eval_result(_server, nil), do: :ok

  def scan_eval_result(_server, {:ok, {:ok, conn}}) do
    ResourceGVKCache.init_cache(conn)
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

  def handle_event("update_source_type", source, ctx) do
    ctx =
      case source do
        "file" -> assign(ctx, source_type: "file", source: @default_file)
        "env" -> assign(ctx, source_type: "env", source: @default_env)
        "k8s" -> assign(ctx, source_type: "k8s", source: nil)
      end

    {:noreply, ctx |> assign(opts: Map.delete(ctx.assigns.opts, "context")) |> broadcast_update()}
  end

  def handle_event("update_source", source, ctx) do
    # TODO check file/env var exists
    {:noreply, ctx |> assign(source: source) |> broadcast_update()}
  end

  def handle_event("update_opts", opts, ctx) do
    # TODO check file/env var exists
    {:noreply, ctx |> assign(opts: opts) |> broadcast_update()}
  end

  @impl true
  def to_attrs(ctx) do
    get_js_attrs(ctx)
  end

  defp get_js_attrs(ctx) do
    Map.new(ctx.assigns, fn {key, value} -> {Atom.to_string(key), value} end)
  end

  defp broadcast_update(ctx) do
    broadcast_event(ctx, "update", get_js_attrs(ctx))
    ctx
  end

  defp all_fields_filled?(attrs, keys) do
    not Enum.any?(keys, fn key -> attrs[key] in [nil, ""] end)
  end

  defp quoted_var(nil), do: nil
  defp quoted_var(string), do: {String.to_atom(string), [], nil}
end
