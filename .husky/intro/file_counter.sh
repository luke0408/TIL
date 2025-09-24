#!/bin/bash

export LC_CTYPE=C.UTF-8
export LC_ALL=C.UTF-8
export LANG="C.UTF-8"
filepath=$(git rev-parse --show-toplevel)

function generate_directory_file_counts() {
  local -a targets=(
    "$filepath/README.md"
    "$filepath/docs/intro.md"
  )

  while read -r count dir; do
    for target in "${targets[@]}"; do
      sed -i "s/__${dir}_DIRECTORY_COUNT__/${count}/g" "$target"
    done
  done < <(
    git ls-files '*.md' \
      | grep -v '^README.md$' \
      | cut -d/ -f1 \
      | sort \
      | uniq -c
  )

  for target in "${targets[@]}"; do
    sed -E -i 's/__[A-Za-z0-9_]+_DIRECTORY_COUNT__/0/g' "$target"
  done
}
