defimpl Kino.Render, for: K8s.Conn do
  def to_livebook(conn) do
    conn |> Kino.Tree.new() |> Kino.Render.to_livebook()
  end
end
