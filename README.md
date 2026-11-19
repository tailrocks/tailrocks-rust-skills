# tailrocks-rust-skills

One portable package with 16 skills. The skills cover strict Rust
engineering: toolchain policy, project baselines, correctness, Axum HTTP
services, public GraphQL APIs, cross-service gRPC, and terminal UI design.
Six skills are model-selectable. Ten skills are user-only and need an
explicit human command.

## Skills

| Skill | Task |
| --- | --- |
| [`tailrocks-rust-toolchain`](skills/tailrocks-rust-toolchain/SKILL.md) | Apply the Rust toolchain policy. |
| [`tailrocks-rust-best-practices`](skills/tailrocks-rust-best-practices/SKILL.md) | Write correct Rust behavior. |
| [`tailrocks-rust-review`](skills/tailrocks-rust-review/SKILL.md) | Review Rust read-only. User-only. |
| [`tailrocks-rust-refactor`](skills/tailrocks-rust-refactor/SKILL.md) | Restructure Rust safely. User-only. |
| [`tailrocks-rust-project-setup`](skills/tailrocks-rust-project-setup/SKILL.md) | Scaffold a strict workspace. User-only. |
| [`tailrocks-rust-project-audit`](skills/tailrocks-rust-project-audit/SKILL.md) | Audit a workspace read-only. User-only. |
| [`tailrocks-rust-project-remediate`](skills/tailrocks-rust-project-remediate/SKILL.md) | Fix approved gaps. User-only. |
| [`tailrocks-axum-best-practices`](skills/tailrocks-axum-best-practices/SKILL.md) | Build Axum HTTP adapters. |
| [`tailrocks-axum-review`](skills/tailrocks-axum-review/SKILL.md) | Review Axum read-only. User-only. |
| [`tailrocks-axum-refactor`](skills/tailrocks-axum-refactor/SKILL.md) | Restructure Axum safely. User-only. |
| [`tailrocks-graphql-best-practices`](skills/tailrocks-graphql-best-practices/SKILL.md) | Evolve the public GraphQL API. |
| [`tailrocks-graphql-review`](skills/tailrocks-graphql-review/SKILL.md) | Review GraphQL read-only. User-only. |
| [`tailrocks-grpc-best-practices`](skills/tailrocks-grpc-best-practices/SKILL.md) | Evolve cross-service gRPC. |
| [`tailrocks-grpc-review`](skills/tailrocks-grpc-review/SKILL.md) | Review gRPC read-only. User-only. |
| [`tailrocks-tui-design`](skills/tailrocks-tui-design/SKILL.md) | Design ratatui screens. |
| [`tailrocks-tui-design-audit`](skills/tailrocks-tui-design-audit/SKILL.md) | Audit terminal design read-only. User-only. |

Each skill body lives in its own directory. Read
`skills/tailrocks-rust-review/SKILL.md` for one complete example.

## Install

Install one complete package in your host's chosen scope. The [Tailrocks
catalog](https://github.com/tailrocks/tailrocks-skills) selects the source commit.
Use the route for your host.

| Host | Native install route |
| --- | --- |
| Claude Code | [Marketplace plugin](docs/installation.md#claude-code) |
| Codex | [Marketplace plugin](docs/installation.md#codex) |
| Grok Build | [Marketplace plugin](docs/installation.md#grok-build) |
| Muse Code | [Marketplace snapshot](docs/installation.md#muse-code) |
| omp | [Marketplace plugin](docs/installation.md#omp) |
| OpenCode V2 | [Git package](docs/installation.md#opencode) |
| Amp | [Directory plugin](docs/installation.md#amp) |
| Antigravity | [Local plugin installer](docs/installation.md#antigravity) |
| pi | [Git package](docs/installation.md#pi) |
| Kimi Code | [Marketplace manager](docs/installation.md#kimi-code) |

Run these commands to install from the Claude Code marketplace.

```sh
claude plugin marketplace add tailrocks/tailrocks-skills
claude plugin install tailrocks-rust-skills@tailrocks --scope user
```

See [runtime requirements](docs/runtime.md) for tools and files the skills use.

## Use

Select the owner for the requested work. To review a Rust module on
Claude Code (session):

```text
/tailrocks-rust-skills:tailrocks-rust-review src/parser.rs
```

The skill returns a report with findings and concrete evidence. The skill
is read-only. It never edits. See `docs/usage.md` for every owner, more
examples, and the ownership boundary.

## Documentation

- [Package guide](docs/README.md)
- [Installation](docs/installation.md)
- [Usage](docs/usage.md)
- [Runtime requirements](docs/runtime.md)
- [Model settings](docs/models.md)
- [Compatibility and verification](docs/compatibility.md)
- [Maintenance](docs/maintenance.md)

## Update and remove

Use [the host's update and removal steps](docs/installation.md).
For a pinned Git package, install the new catalog revision and use one copy in
the chosen scope.

## Contribute

Open an issue or a pull request on GitHub. Write all new and changed
prose in ASD-STE100 Simplified Technical English, Issue 9 rules. Run
`alint check`, the strict-JSON check, and the frontmatter check
before the pull request. See `docs/maintenance.md` for the full
list. Never add evaluation content.

## License

Apache License, Version 2.0. See `LICENSE` for the full text.
