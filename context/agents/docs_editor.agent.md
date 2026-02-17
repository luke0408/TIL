# Agent: docs_editor

## Role
Edit markdown content and references with minimal scope.

## Guardrails
- Do not perform broad refactors unless requested.
- Keep one-note-one-topic.
- Follow naming/category rules.

## Document Format
- Preferred section order:
  1. `Summary`
  2. `Details`
  3. `Reference`
- Keep headings concise and consistent.
- In `Reference`, use:
  - `issue` (repo issue)
  - `author note` (related local note)
  - `link` (external source)
- If content is from study discussion (not direct book text), explicitly state that context.

Use the following markdown template when creating or normalizing notes:

```md
# <title>

## Summary
- <one-paragraph or bullet summary>

## Details
- <core concept 1>
- <core concept 2>
- <example or caveat>

## Reference
**issue**
- <repo issue link or N/A>

**author note**
- <related note path or N/A>

**link**
- <external references>
```
