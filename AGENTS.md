# AGENTS.md (for Codex)

This document is the operational contract for AI agents working in this repository.

## 0) Authority
- Primary source of truth: `README.md`
- If this file conflicts with `README.md`, `README.md` wins.

---

## 1) Repository Goal
- Maintain high-quality TIL notes with clear structure and consistent naming.
- Prefer small, reviewable changes over large sweeping edits.

---

## 2) Core Rules (Must Follow)

### 2.1 Naming
- Folder and file names should be in **English**.
- Exception: **book titles may be in Korean**.
- Prefer lowercase + snake_case for markdown filenames.
- Respect legacy filenames unless:
  - user explicitly requests rename, or
  - rename is clearly required for consistency.

### 2.2 Note Scope
- One note = one topic.
- If a note spans multiple topics, split into multiple notes.

### 2.3 Category Policy
- Conceptual principles → `docs/DevGeneral/Principle/`
- AI/ML fundamentals → `docs/AI_ML/`
- RAG / Vector DB operation topics → `docs/AI_ML/RAG/`
- Book-specific materials → `docs/Book/<book-title>/`

### 2.4 Study vs Book Separation
- Keep study discussion notes and book content separate.
- Do not merge inferred study conclusions into book-summary notes.
- If source is study discussion, explicitly mark it in note context.

### 2.5 Excalidraw / Canvas
- `*.canvas` files are not tracked.
- Do not let raw drawing files pollute docs category structure.
- If needed, keep raw artifacts under `assets/excalidraw/` and extract final content into markdown notes.

---

## 3) Writing Conventions
- Keep notes concise but complete.
- Recommended sections:
  - `Summary`
  - `Details`
  - `Reference`
- In `Reference`, use README taxonomy:
  - `issue`: issue in this repo
  - `author note`: related local note in this repo
  - `link`: external references

---

## 4) Commit Workflow (Strict)

### 4.1 Commit Style
- Use conventional commits:
  - `docs: ...`
  - `refactor(docs): ...`
  - `chore(config): ...`
- Keep commits small and focused.
- Avoid mixing unrelated changes.

### 4.2 Size Rule
- Keep each commit under **300 changed lines** when practical.
- If large change is needed, split into multiple commits by concern.

### 4.3 Mandatory Checks
Before commit:
```bash
git diff --numstat
git diff --cached --numstat
```

After commit:
```bash
git show --stat --oneline HEAD
```

If commit is too large or mixed:
```bash
git reset --mixed HEAD~1
# split and recommit by topic
```

---

## 5) Change Workflow (Agent Procedure)
1. Read `README.md` and this file.
2. Confirm target category/path before writing.
3. Apply minimal edits needed.
4. If links/paths changed, fix internal markdown links.
5. Validate docs build when structure/links changed:
   - `npm run build`
6. Commit in small, scoped units.

---

## 6) Safety Rules for Autonomous Edits
- Do not delete user content unless explicitly requested.
- For broad restructuring, propose plan first, then apply.
- Preserve user decisions on style/category as persistent repository policy.

---

## 7) Quick Decision Guide
- Unsure where to place a note?
  - Principle-centric → `DevGeneral/Principle`
  - Model/embedding/vector concept → `AI_ML`
  - Retrieval/indexing/Vector DB ops → `AI_ML/RAG`
  - Book material → `Book/<book-title>`
- Unsure whether to split?
  - If two independent claims can each stand alone, split.
