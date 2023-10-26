import Config

config :esbuild,
  default: [
    args:
      ~w(assets/get_cell/main.tsx assets/connection_cell/main.tsx --external:react --external:react-dom/client --entry-names=[dir]/[name] --outbase=assets --outdir=lib/assets --target=es2020 --format=esm --bundle)
  ]

config :tailwind, version: "3.2.4"

if File.exists?("config/#{config_env()}.exs"), do: import_config("#{config_env()}.exs")
