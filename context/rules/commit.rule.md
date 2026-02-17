# Commit Rule

## Policy
- Use conventional commits.
- Keep commit scope focused and reviewable.
- Keep each commit under ~300 changed lines when practical.

## Mandatory Checks
Before commit:
```bash
git diff --numstat
git diff --cached --numstat
```
After commit:
```bash
git show --stat --oneline HEAD
```
