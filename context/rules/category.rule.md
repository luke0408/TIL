# Category Rule

## Classification (General Structure)
Use these path patterns first:
- `docs/<top-category>/<note>.md`
- `docs/<top-category>/<sub-category>/<note>.md`

Classification must be based on topic intent (not file history):
1. Decide top-category by domain (e.g., `AI_ML`, `Languages`, `Backend`, `DevGeneral`).
2. Use sub-category only when it improves retrieval clarity.
3. Keep note scope to one topic per file.
4. Book-related content goes to `docs/Book/<book-title>/`.

## Classification (Current Repository Mapping)
- Principle/concept-first notes -> `docs/DevGeneral/Principle/`
- AI/ML fundamentals -> `docs/AI_ML/`
- RAG / Vector DB operations -> `docs/AI_ML/RAG/`
- Book-specific materials -> `docs/Book/<book-title>/`

## Category Index Rule
- Every category directory must include an overview doc.
- Standard filename: `README.md`
- Applies to both:
  - `docs/<top-category>/README.md`
  - `docs/<top-category>/<sub-category>/README.md`
- Rationale: Docusaurus category-index convention supports `index`, `README`, or folder-name docs; this repository standardizes on `README.md`.

## Ordering Rule (Mandatory)
- Each note in a category must define `sidebar_position`.
- Order policy: easy -> hard.
- Difficulty heuristic:
  - more prerequisite concepts (related prerequisite notes) => harder topic
  - fewer prerequisites => easier topic
- Tie-breaker:
  1. broader/foundational concept first
  2. then filename alphabetical order

## Scope Rule
- One note must contain one topic.
- Split multi-topic notes before filing.
