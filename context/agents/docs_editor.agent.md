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
- Write note body in Korean by default.
- Exception: direct quotations may remain in original language.
- In `Reference`, use:
  - `issue` (repo issue)
  - `link` (external source)
- If mentioning previously written concepts, add inline markdown links directly in the body.
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
- Mention related prior concepts with inline links.
  - Example: TypeScript(줄여서 TS)는 [JavaScript](../JavaScript/JavaScript.md)에서 파생된 ...

## Reference
**issue**
- <repo issue link or N/A>

**link**
- <external references>
```
