# KinoK8s

A Livebook Kino for learning to use the k8s Elixir library.

[![Module Version](https://img.shields.io/hexpm/v/kino_k8s.svg)](https://hex.pm/packages/kino_k8s)
[![Last Updated](https://img.shields.io/github/last-commit/mruoss/kino_k8s.svg)](https://github.com/mruoss/kino_k8s/commits/main)

[![Hex Docs](https://img.shields.io/badge/hex-docs-lightgreen.svg)](https://hexdocs.pm/kino_k8s/)
[![Total Download](https://img.shields.io/hexpm/dt/kino_k8s.svg)](https://hex.pm/packages/kino_k8s)
[![License](https://img.shields.io/hexpm/l/kino_k8s.svg)](https://github.com/mruoss/kino_k8s/blob/main/LICENSE)

## Installation

Install the latest 1.x version:

```elixir
Mix.install([{:kino_k8s, "~> 2.0"}])
```

To install the latest from `main` branch:

```elixir
Mix.install([{:kino_k8s, github: "mruoss/kino_k8s"}])
```

## Smart Cells

`kino_k8s` brings the **Kubernetes Client** Smart Cell to your
[Livebook](https://livebook.dev). It lets you perform a set of operations on
your Kubernetes cluster and learn how to work with the
[`kubereq`](https://github.com/mruoss/kubereq) library


## Development

### Build and Watch Javascript and CSS

```bash
cd assets
npm install
npm run dev
```

### Install and run livebook

```bash
mix escript.install hex livebook
livebook server ./dev.livemd
```

### Build Assets

```bash
cd assets
npm install
npm run build
```
