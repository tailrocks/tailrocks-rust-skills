# Runtime requirements

Install the [complete package](installation.md). The native registrars only
register skill files. Skill procedures control when to call tools or execute a
script. Installation grants no authority for a skill action.

Use the target clone's `rust-toolchain.toml`, `mise.toml`, and `mise.lock`.
Read the toolchain skill before Rust work. Follow its mise and Cargo-provider
policy. Use Bun for GraphQL client generation and the target's pinned Buf
for proto checks.

Install the whole package. The audit and remediation skills read the setup
skill's assets. The shipped `rust-toolchain.toml.template` files are examples.
The setup and toolchain procedures copy the selected example to the target as
`rust-toolchain.toml`. Keep the target filename and review its pins during setup.
