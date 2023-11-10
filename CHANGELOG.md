# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## Unreleased

<!-- Add your changelog entry to the relevant subsection -->

<!-- ### Added | Changed | Deprecated | Removed | Fixed | Security -->

### Added

- Integration tests using Playwright

<!--------------------- Don't add new entries after this line --------------------->

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
