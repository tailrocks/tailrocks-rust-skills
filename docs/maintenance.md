# Maintenance

## Verify commands

Run these commands from the package root.

```sh
python3 scripts/validate-package.py
alint check --fail-on-warning
npm pack --dry-run --json
```

The Python validator checks native manifests, adapters, skill metadata, and
packaged resource paths. Inspect the npm file list when runtime files change.
CI checks strict JSON and skill frontmatter. See [verification](verification.md)
for the expected results and host evidence.

Use Markdownlint CLI2 `0.23.3` to check Markdown formatting. Review meaning,
policy, and authority in the changed instructions.

## Policy version and update

The generated CI uses Alint `0.21.0`. The `.alint.yml` file pins the central
`standards/alint/active.yml` profile by source revision and SHA-256. Review
changes to that profile. Update both parts of the pin together. Repeat the
verification commands after the update.

## CI source and regeneration

Use Velnor Actions `0.1.80` from source commit
`b71a0045e42f6a8b620aa9283d0106bed622fe3b`. The
[release manifest](../.velnor/release-manifest.json) records the binary digests.
The input is `.velnor/config.toml`. CI runs Alint, strict JSON, frontmatter ID,
and Lychee `0.15.1` with `--offline --include-fragments`. The link check covers
local files and anchors. Generated Jactionlint and the plan feed the same
required verdict.

Change the generator input and run `velnor-actions generate`. Keep the
input and generated files together. The generator preserves the repository's
`.github/PULL_REQUEST_TEMPLATE.md` file.

Compare the generated files with a fresh preview.

```sh
package_preview="$(mktemp -d)"
velnor-actions generate --output-dir "$package_preview"
diff -r --brief .github "$package_preview/.github"
```

An empty diff confirms the recorded generator can reproduce the files.

## Release and migration

Update the version and description in `plugin.json` when the release requires
it. Use the central generator to sync equivalent host metadata and the shared
files. From the catalog checkout, point the generator at the directory that
contains the plugin checkouts.

```sh
python3 scripts/sync-packages.py --workspace /path/to/plugin-checkouts
python3 scripts/sync-packages.py --workspace /path/to/plugin-checkouts --check
```

Review changes from `standards/native/` and `standards/models/model-routing.md`
in the catalog checkout. Update `CHANGELOG.md`. Run the package checks and regenerate
CI when its inputs change. Tag the verified release commit, publish it, and
record its exact revision in the central catalog. Regenerate the central native
catalogs after that revision is available. Check the published tag and catalog pin.
Use [installation](installation.md) to migrate or remove an installed version.

## Prohibited evaluation content

Never add evaluation content to skills, references, templates, task
definitions, or CI. This ban covers behavioral benchmarks, trigger
precision and recall, repeated model trials, scored wording
comparisons, and model-family matrices. It also covers pressure
scenarios, holdout datasets, judge models, grader models, and
pass-rate targets. It also covers token and latency comparisons,
mandatory failing baselines, and task trials under any name. Do not
relabel such work as smoke, pressure, or compatibility checks. A
sample task never proves behavior.

Before aggregate commands, read each task definition and strip
evaluation steps. Never trust the command name. To find violations,
search case-insensitively for `benchmark`, `trigger precision`,
`trigger recall`, and `model trial`. Also search for `scored
output`, `model-family`, `pressure scenario`, and `holdout`. Also
search for `judge`, `grader`, `pass-rate`, and `task trial`. Read
the surrounding text before a change. A prohibition or a historical
explanation is not an active requirement.
