defmodule KinoK8s.Application do
  @moduledoc false

  use Application

  @impl true
  def start(_type, _args) do
    Kino.SmartCell.register(KinoK8s.GETCell)

    Supervisor.start_link([KinoK8s.ResourceGVKCache],
      strategy: :one_for_one,
      name: KinoK8s.Supervisor
    )
  end
end
