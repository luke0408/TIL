# Docs Build Rule

Run docs build when any of these are changed:
- docs path structure
- markdown links
- docusaurus config
- sidebar/configuration files

Command:
```bash
npm run build
```

If build fails due to moved paths, fix internal markdown links first.
