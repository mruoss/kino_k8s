defmodule KinoK8s.MixProject do
  use Mix.Project

  def project do
    [
      app: :kino_k8s,
      version: "0.1.0",
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      mod: {KinoK8s.Application, [Mix.env()]},
      extra_applications: [:logger]
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      {:k8s, "~> 2.0"},
      {:ymlr, "~> 4.0"},
      {:kino, "~> 0.11.0"},
    ]
  end
end
