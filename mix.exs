defmodule KinoK8s.MixProject do
  use Mix.Project

  @source_url "https://github.com/mruoss/kino_k8s"
  @version "2.1.0"

  def project do
    [
      app: :kino_k8s,
      description: "A Livebook Kino for learning to use the k8s Elixir library.",
      version: @version,
      elixir: "~> 1.15",
      start_permanent: Mix.env() == :prod,
      deps: deps(),
      package: package(),
      docs: [
        main: "readme",
        extras: ["README.md", "CHANGELOG.md"],
        source_ref: "v#{@version}",
        source_url: @source_url
      ]
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
      {:ex_doc, ">= 0.0.0", only: :dev, runtime: false},
      {:kubereq, "~> 0.4.0"},
      {:kino, "~> 0.18.0"},
      {:ymlr, "~> 5.0"}
    ]
  end

  defp package do
    [
      name: :kino_k8s,
      maintainers: ["Michael Ruoss"],
      licenses: ["Apache-2.0"],
      links: %{
        "GitHub" => @source_url,
        "Sponsor" => "https://github.com/sponsors/mruoss"
      },
      files: ["lib", "mix.exs", "README*", "LICENSE*", "CHANGELOG.md"]
    ]
  end
end
