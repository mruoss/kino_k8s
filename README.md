# KinoK8s

**TODO: Add description**

## Installation

If [available in Hex](https://hex.pm/docs/publish), the package can be installed
by adding `kino_k8s` to your list of dependencies in `mix.exs`:

```elixir
def deps do
  [
    {:kino_k8s, "~> 0.1.0"}
  ]
end
```

Documentation can be generated with [ExDoc](https://github.com/elixir-lang/ex_doc)
and published on [HexDocs](https://hexdocs.pm). Once published, the docs can
be found at <https://hexdocs.pm/kino_k8s>.

## Development

### Build and Watch Javascript and CSS

```bash
npm start
```

### Build for Production

```bash
npm run build
```

### Install and run livebook

```bash
mix escript.install hex livebook
MIX_ENV=dev livebook server ./demo.livemd
```
