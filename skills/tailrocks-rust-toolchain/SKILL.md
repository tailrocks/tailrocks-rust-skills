---
name: tailrocks-rust-toolchain
description: >-
  Apply the Tailrocks Rust toolchain policy to every Rust task: latest stable Rust, mbx (Mr. Boxington) as the Cargo provider through mise, and the committed mise.toml and rust-toolchain.toml baseline in each clone. Use for any Rust build, test, or project work.
argument-hint: "<Rust task or project path>"
disable-model-invocation: false
license: Apache-2.0
user-invocable: true
when_to_use: >-
  Any Rust build, test, or project work starts in a clone.
---

# Rust Toolchain Policy

## Use this skill

This skill applies the house toolchain policy to a Rust clone. Every Rust
project uses the latest stable Rust and mbx. mbx is the Cargo provider. mise
installs both. Each clone carries the same two committed files:

- `mise.toml` selects mise, Rust, mbx, and the Cargo wrapper.
- `rust-toolchain.toml` declares the Rust channel for rustup-native tools.

Use this skill at the start of Rust work in any clone. For a new workspace
scaffold, use `tailrocks-rust-project-setup`. For version evidence rules,
read the version policy in that skill's references.

## Before you start

Read `references/runtime-trust.md`. Resolve the current stable versions
from official sources:

- Rust: <https://forge.rust-lang.org/>
- mise: <https://github.com/jdx/mise/releases>
- mbx: <https://github.com/jdx/mr-boxington/releases>

The assets in this skill carry pins that were current at their last update.
Refresh each pin to the current stable version when you apply them.

## Procedure

1. Check that the clone has `mise.toml` and `rust-toolchain.toml`. If one
   is missing, create it from the asset in this skill.
2. Compare each pin with the current stable release. Update a stale pin to
   the current stable version. Keep pins exact. Do not use `latest` as a
   committed value in a clone.
3. Keep `mr_boxington = true` on the Rust tool. Keep `mr-boxington` in
   `[tools]`. Keep the `[wrappers.cargo]` block with `command = "mbx"` and
   `MBX_CARGO_SHIM_MODE = "1"`.
4. Keep `profile = "minimal"`, the `clippy` and `rustfmt` components, and
   the Linux cross targets in both files.
5. Run `mise install`. Then run Cargo through mise: `mise exec -- cargo ...`.
6. Never set a global `CARGO_TARGET_DIR`, Cargo `build.target-dir`, or
   `RUSTC_WRAPPER`. mbx installs its own rustc shim. Do not use sccache
   with mbx.
7. After a mbx upgrade, run `mbx doctor`. If it reports a stale shim path,
   run `mbx setup` again.
8. Commit both files and `mise.lock` together in one tooling change.

## Result

The clone builds with the latest stable Rust through mbx. Every agent and
CI job resolves the same tools from the committed files.

## Completion checks

1. `mise doctor` reports no problems.
2. `mbx doctor` reports zero failures and zero warnings.
3. `mise exec -- cargo --version` reports the current stable Rust.
4. `mise.toml`, `rust-toolchain.toml`, and `mise.lock` are committed.
5. No tool pin uses `latest`. No global `CARGO_TARGET_DIR` or
   `RUSTC_WRAPPER` is set.

## References

- `references/runtime-trust.md`: trust boundary for repository and tool
  output. Read before any action.
- `assets/mise.toml`: the clone-level mise baseline.
- `assets/rust-toolchain.toml`: the clone-level Rust channel declaration.
