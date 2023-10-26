import Config

config :esbuild,
  version: "0.18.6",
  default: [
    args:
      ~w(assets/get_cell/main.tsx assets/connection_cell/main.tsx --external:react --external:react-dom/client --entry-names=[dir]/[name] --outbase=assets --outdir=lib/assets --target=es2020 --format=esm --bundle --sourcemap=inline --watch)
  ]

config :tailwind,
  version: "3.2.4",
  default: [
    args: ~w(
        --config=tailwind.config.js
        --input=css/app.css
        --output=../priv/static/assets/app.css
        --watch
      ),
    cd: Path.expand("../assets", __DIR__)
  ]
