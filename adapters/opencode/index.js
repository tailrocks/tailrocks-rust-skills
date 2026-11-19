import { readFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { Plugin, Skill } from '@opencode/plugin'
import { parse } from 'yaml'

const skillEntries = [
  {
    "id": "tailrocks-axum-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-axum-refactor",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-axum-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-graphql-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-graphql-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-grpc-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-grpc-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-best-practices",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-rust-project-audit",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-project-remediate",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-project-setup",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-refactor",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-review",
    "explicitOnly": true
  },
  {
    "id": "tailrocks-rust-toolchain",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-tui-design",
    "explicitOnly": false
  },
  {
    "id": "tailrocks-tui-design-audit",
    "explicitOnly": true
  }
]

export default Plugin.define({
  id: 'tailrocks-rust-skills',
  async setup(ctx) {
    const skills = await Promise.all(skillEntries.map(async ({ id, explicitOnly }) => {
      const url = new URL(`../../skills/${id}/SKILL.md`, import.meta.url)
      const path = fileURLToPath(url)
      const source = await readFile(url, 'utf8')
      const frontmatter = /^\uFEFF?---[ \t]*\r?\n([\s\S]*?)\r?\n---[ \t]*(?:\r?\n|$)/.exec(source)
      if (!frontmatter) {
        throw new Error(`Missing YAML frontmatter in ${path}`)
      }

      const { name, description } = parse(frontmatter[1]) ?? {}
      if (name !== id || typeof description !== 'string' || !description.trim()) {
        throw new Error(`Invalid name or description in ${path}`)
      }

      return {
        id: Skill.ID.make(id),
        name: Skill.Name.make(name),
        description,
        path: Skill.Info.fields.path.make(path),
        content: source.slice(frontmatter[0].length),
        autoinvoke: !explicitOnly,
      }
    }))

    await ctx.skill.transform((editor) => {
      for (const skill of skills) editor.add(skill)
    })
  },
})
