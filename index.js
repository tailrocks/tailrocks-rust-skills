// Native Amp directory plugin for tailrocks-rust-skills.
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

export default async function (amp) {
  for (const { id, explicitOnly } of skillEntries) {
    await amp.registerSkill({ path: `skills/${id}`, listed: !explicitOnly })
  }
}
