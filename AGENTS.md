# AGENTS.md

This package holds 16 Rust engineering skills. Install it
as one unit. Do not copy one `SKILL.md` file out of its skill directory.
The audit and remediate skills read templates from the setup skill
directory.

## Structure

- `plugin.json` is the portable manifest. It is the source of truth
  for name, version, and description.
- Keep the Claude, Kimi, and Antigravity manifests and `package.json`
  aligned with the portable manifest.
- `skills/` holds one directory per skill id. Each directory holds its
  own `SKILL.md` file plus its own references.
- `docs/` holds the package guides. Start at [the package guide](docs/README.md).
- Keep `adapters/opencode/index.js` and root `index.js` limited to
  native skill registration. Keep runtime resources in the installed package.
- Keep the OpenAI metadata and the model-routing reference with each skill.
  Use portable frontmatter. Keep explicit-only rules in the procedure,
  OpenAI policy metadata, and the generated registration entries.

## Rules for changes

- Write all new and changed prose in ASD-STE100 Simplified Technical
  English, Issue 9 rules.
- Never hand-edit `.github/`. Change `.velnor/config.toml` instead.
  Regenerate the outputs. The generator preserves
  `.github/PULL_REQUEST_TEMPLATE.md`. See `docs/maintenance.md`.
- Never add evaluation content: no benchmarks, no model trials, no
  scored comparisons, no pass-rate targets. See `docs/maintenance.md`.
- Keep one fact in one place. Link to `docs/` guides. Do not copy
  skill bodies into guides.

## Checks before a pull request

Run these checks from the repository root:

```sh
python3 scripts/validate-package.py
alint check
```

See `docs/maintenance.md` for the strict-JSON check, the frontmatter
check, and the full check list with expected results.
