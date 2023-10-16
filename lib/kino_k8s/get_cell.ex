defmodule KinoK8s.GETCell do
  use Kino.JS, assets_path: "lib/assets/get_cell"
  use Kino.JS.Live
  use Kino.SmartCell, name: "GET Resource"

  @impl true
  def init(attrs, ctx) do
    kubeconfig = System.get_env("LB_KUBECONFIG")
    ctx = assign(ctx, mix_env: Mix.env())

    cond do
      is_nil(kubeconfig) ->
        {:ok,
         assign(ctx,
           error:
             "KUBECONFIG is not defined. You have to define a secret called KUBECONFIG pointing to the kube config file."
         )}

      not File.exists?(kubeconfig) ->
        {:ok,
         assign(ctx,
           error:
             "The file #{kubeconfig} defined by the KBUECONFIG secret was not found on your system."
         )}

      :otherwise ->
        {:ok, assign(ctx, kubeconfig: kubeconfig)}
    end
  end

  @impl true
  def handle_connect(ctx) do
    {:ok, ctx.assigns, ctx}
  end

  @impl true
  def to_attrs(ctx) do
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
