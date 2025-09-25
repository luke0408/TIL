#!/usr/bin/env python3
from __future__ import annotations

import json
import sys
from pathlib import Path
from typing import Iterable, List, Tuple

ROOT = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path.cwd()
SETTING_PATH = ROOT / ".husky" / "intro" / "setting.json"

with SETTING_PATH.open(encoding="utf-8") as fp:
    settings = json.load(fp)

IGNORE_NAMES = set(settings.get("ignore_files", []))


def should_ignore(path: Path) -> bool:
    if path == ROOT:
        return False

    try:
        relative = path.relative_to(ROOT)
    except ValueError:
        return True

    for part in relative.parts:
        if part in IGNORE_NAMES:
            return True
    return False


def collect_entries(path: Path) -> List[Tuple[str, Path, List[Tuple]]]:
    entries: List[Tuple[str, Path, List[Tuple]]] = []

    children = sorted(
        path.iterdir(),
        key=lambda p: (p.is_file(), p.name.lower()),
    )

    for child in children:
        if should_ignore(child):
            continue
        if child.is_dir():
            child_entries = collect_entries(child)
            if child_entries:
                entries.append(("dir", child, child_entries))
        elif child.suffix.lower() == ".md":
            entries.append(("file", child, []))
    return entries


def render(entries: Iterable[Tuple[str, Path, List[Tuple]]], ancestors: List[bool]) -> List[str]:
    lines: List[str] = []
    for index, (kind, node_path, children) in enumerate(entries):
        is_last = index == len(entries) - 1
        parts: List[str] = []
        for ancestor_last in ancestors:
            parts.append("&nbsp;&nbsp;&nbsp;&nbsp;" if ancestor_last else "┃&nbsp;&nbsp;")

        connector = "┗━" if is_last else "┣━"
        rel_path = node_path.relative_to(ROOT).as_posix()
        label = node_path.stem if kind == "file" else node_path.name
        icon = "📄" if kind == "file" else "📂"
        line = f"{''.join(parts)}{connector}&nbsp;{icon}[**{label}**](./{rel_path})<br></br>"
        lines.append(line)

        if kind == "dir":
            lines.extend(render(children, ancestors + [is_last]))
    return lines


def main() -> None:
    entries = collect_entries(ROOT)
    print("📦[**TIL**](./)<br></br>")
    for line in render(entries, []):
        print(line)


if __name__ == "__main__":
    main()
