# KinoK8s

A Livebook Kino for learning to use the k8s Elixir library.

[![Module Version](https://img.shields.io/hexpm/v/kino_k8s.svg)](https://hex.pm/packages/kino_k8s)
[![Last Updated](https://img.shields.io/github/last-commit/mruoss/kino_k8s.svg)](https://github.com/mruoss/kino_k8s/commits/main)

[![Hex Docs](https://img.shields.io/badge/hex-docs-lightgreen.svg)](https://hexdocs.pm/kino_k8s/)
[![Total Download](https://img.shields.io/hexpm/dt/kino_k8s.svg)](https://hex.pm/packages/kino_k8s)
[![License](https://img.shields.io/hexpm/l/kino_k8s.svg)](https://github.com/mruoss/kino_k8s/blob/main/LICENSE)

## Installation

```elixir
Mix.install([{:kino_k8s, "~> 1.0"}])
```

## Smart Cells

`kino_k8s` brings the following Smart Cells to your [Livebook](https://livebook.dev):

- **Cluster Connection** - Connect to a Kubernetes Cluster
- **Get / List / Watch Resources**
- **Create / Update / Apply Resource** - Modify resources in your cluster
- **Connect to Pod (Exec/Logs)** - Renders a terminal using xterm.js (Formerly `kino_k8s_term`).

The smart cells require a connection to a Kubernetes Cluster in form of a
`%K8s.Conn{}` object. To add such a connection to your Livebook, you can add
the `Cluster Connection` smart cell before adding any other smart cells.

## Development

### Build and Watch Javascript and CSS

```bash
npm install
npm start
```

### Install and run livebook

```bash
mix escript.install hex livebook
livebook server ./dev.livemd
```

### Build Assets

```bash
npm run build
```
