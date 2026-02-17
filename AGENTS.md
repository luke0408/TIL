# AGENTS.md (for Codex)

This file defines the working contract for AI coding agents (especially Codex) in this TIL repository.

## 0) Primary Rule
- Always follow `README.md` first.
- If this file conflicts with `README.md`, `README.md` wins.

## 1) Naming Convention
- Folder and file names must be in **English**.
- **Exception:** book titles may be in Korean.
- Use lowercase + snake_case for markdown filenames when possible.
- Respect existing legacy filenames unless rename is explicitly requested or clearly required for consistency.

Examples:
- `structured_vs_unstructured_data_and_interpretation_entropy.md`
- `embedding_vector_basics_dense_l2_cosine_similarity.md`
- `docs/Book/벡터 데이터베이스 설계와 구축/`

## 2) Note Scope
- One note must cover **one topic only**.
- If content spans multiple topics, split into multiple notes.

## 3) Category Policy
- Conceptual principles → `docs/DevGeneral/Principle/`
- AI/ML fundamentals → `docs/AI_ML/`
- RAG / Vector DB operation topics → `docs/AI_ML/RAG/`
- Book-specific materials → `docs/Book/<book-title>/`

## 4) Study Notes vs Book Content
- Keep study discussion notes and book content **separate**.
- Do not mix inferred study conclusions into book summary files.
- If source is a study discussion, explicitly label it in the note.

## 5) Excalidraw / Canvas Handling
- `*.canvas` files are not tracked.
- Excalidraw artifacts should not pollute docs category structure.
- If needed, keep raw artifacts under `assets/excalidraw/` and extract final content into markdown notes.

## 6) Writing Quality
- Keep notes concise but complete.
- Prefer clear headings: `Summary`, `Details`, `Reference`.
- In `Reference`, follow README policy:
  - `issue`: issue in this repo
  - `author note`: related local note in this repo
  - `link`: external references

## 7) Commit Policy for Agents
- Commit in small, reviewable units.
- Keep each commit under 300 changed lines when practical; split large changes.
- Use conventional commit style:
  - `docs: ...`
  - `refactor(docs): ...`
  - `chore(config): ...`
- Avoid mixing unrelated changes in one commit.
- Before commit:
  - `git diff --numstat`
  - `git diff --cached --numstat`
- After commit:
  - `git show --stat --oneline HEAD`

## 8) Before Opening/Updating PR
- Verify changed paths follow naming rules.
- Verify note scope is one-topic-per-file.
- Run build check when structure/links changed:
  - `npm run build`
- If links moved, fix internal markdown links.

## 9) Safety for Autonomous Editing
- Do not delete user content unless explicitly requested.
- For broad restructuring, propose plan first, then apply.
- Keep user-requested style and category decisions as persistent rules.
