# Changelog

## 0.30.3 - 2026-11-20

- Complete the shared model API controls and reasoning-state guidance.
- State the native discovery limits for user-invoked workflows.
- Preserve the portable author in the Claude manifest and validate that match.
- Use the shared release procedure with full commit pins and optional tags.

## 0.30.2 - 2026-11-20

- Refresh the shared validator for user-invoked policy packages and the
  retirement of the standalone Vitalik Mode package.

## 0.30.1 - 2026-11-20

- Enforce portable description characters and the shared 500-line skill limit.
- Clarify native Grok confirmation and record Antigravity installation evidence.

## 0.30.0 - 2026-11-20

- Replace backtracking in package validation with bounded parsing.
- Commit and ship the resolved dependency graph with pinned Bun 1.4.4.
- Documented pinned native installs across the Tailrocks hosts, including
  OpenCode V2, Amp, Antigravity, omp, and pi.
- Added shared model guidance, portable skill metadata, and native package
  validation.
- Aligned generated CI on Velnor Actions 0.1.80 with offline link and anchor
  checks.
- Marked bundled Rust toolchain examples as templates. They still install as
  `rust-toolchain.toml` in a target clone.

## 0.29.0 - 2026-10-22

- Added `tailrocks-rust-toolchain`, a model-selectable skill. It applies
  the Rust toolchain policy to any clone: latest stable Rust, mbx as the
  Cargo provider through mise, and the committed `mise.toml` and
  `rust-toolchain.toml` baseline. The skill ships both files as assets.

## 0.28.1 - 2026-10-08

Applied the common active-package structure on branch
`standardize/package-rewrite`:

- Rewrote `plugin.json` as the portable Agent Plugins 1.0.0 manifest.
  It is now the source of truth for name, version, and description.
- Trimmed `.claude-plugin/plugin.json` to name, version, and
  description.
- Rewrote `.kimi-plugin/plugin.json` with `skills` set to `./skills/`
  and a four-field interface block.
- Removed the component marketplace file
  `.claude-plugin/marketplace.json`. The central `tailrocks`
  marketplace is now the only catalog.
- Removed the legacy host manifest `.codex-plugin/`. Codex uses the
  portable manifest.
- Removed the dead root file `catalog.json`. Nothing referenced it.
- Removed the root scripts runtime and the generated skill-definition
  copies under `docs/`.
- Added `.alint.yml`, pinned to the shared active profile.
- Restructured `README.md` into the eight required sections.
- Replaced the generated docs index with the six standard guides
  under `docs/`.
- Added `AGENTS.md` and `.github/PULL_REQUEST_TEMPLATE.md`.
- Rewrote all 15 `SKILL.md` files with the common body order in
  strict STE prose.
- Corrected the binary-test and workspace-inheritance claims.
  Labeled the `mod.rs` and test-file rules as Tailrocks rules.
- Split advisory duties: cargo-deny owns licenses, bans, and
  sources. Cargo-audit owns advisories.
- Removed the TypeScript crate-version helper. Version resolution
  uses native registry queries.
- Labeled Juniper, TanStack, Buf, and private gRPC use as Tailrocks
  choices.
- Regenerated CI with Velnor Actions 0.1.4.
- Replaced the `.github/CLAUDE.md` symlink with a regular pointer
  file. Installers that reject symlinks now accept the package.

## 0.28.0 - 2026-10-07

Fifteen-skill package at commit `0317f100714dc66285c01c24f7967134375b5ac5`
("adopt velnor-actions 0.1.0"). Five skills are model-selectable.
Ten skills are user-only and need an explicit human command.
