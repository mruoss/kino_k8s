defmodule KinoK8s.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, [env]) do
    Kino.SmartCell.register(KinoK8s.ApplyCell)
    Kino.SmartCell.register(KinoK8s.ConnectionCell)
    Kino.SmartCell.register(KinoK8s.GetCell)
    Kino.SmartCell.register(KinoK8s.TerminalCell)

    Supervisor.start_link(if(env == :test, do: [], else: [KinoK8s.ResourceGVKCache]),
      strategy: :one_for_one,
      name: KinoK8s.Supervisor
    )
  end
end
