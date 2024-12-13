# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Unreleased

<!-- Add your changelog entry to the relevant subsection -->

<!-- ### Added | Changed | Deprecated | Removed | Fixed | Security -->

<!--------------------- Don't add new entries after this line --------------------->

## [2.0.0] - 2024-12-13

## Changed

* Switch Kubernetes Client to [`kubereq`](https://github.com/mruoss/kubereq) - [#398](https://github.com/mruoss/kino_k8s/pull/398)
* Consolidate all smart cells into a single cell - [#398](https://github.com/mruoss/kino_k8s/pull/398)
* Use [`@livebook/kino-bundler`](https://github.com/livebook-dev/kino-bundler) to bundle the JS/CSS. [#365](https://github.com/mruoss/kino_k8s/pull/365)

## [1.2.4] - 2024-08-21

### Changed

- Dependency Updates

## [1.2.3] - 2024-04-29

### Changed

- Set `insecure_skip_tls_verify` to `false` by default.

## [1.2.2] - 2024-01-28

### Changed

- Dependency Updates

## [1.2.1] - 2023-11-29

### Changed

- Upgrade `xterm.js` dependency to `v5.3.0`

## [1.2.0] - 2023-11-14

### Added

- Basic Integration test using Playwright
- Better support for roles with fewer permissions than (cluster-) admin. [#26](https://github.com/mruoss/kino_k8s/issues/26)

## [1.1.0] - 2023-11-03

### Added

- Render results as Kinos [#17](https://github.com/mruoss/kino_k8s/issues/17):
  - `K8s.Conn` is rendered as `Kino.Tree`
  - Resources are rendered as `Kino.Markdown`
  - Resource lists are rendered as `Kino.Tree`

## [1.0.2] - 2023-11-03

### Fixed

- Use correct CDN paths to production builds
- Use build time `DEBUG` variable in JS instead of `Mix.env()`

## [1.0.1] - 2023-10-31

### Changed

- Minify main.js

## [1.0.0] - 2023-10-30

Initial release with 4 Smart Cells:

- Cluster Connection
- Get / List / Watch Resources
- Apply Resource
- Connect to Pod (Exec/Logs) - Formerly `kino_k8s_term`.
