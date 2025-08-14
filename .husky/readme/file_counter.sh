#!/bin/bash

export LC_CTYPE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG="UTF-8"
filepath=$(git rev-parse --show-toplevel)

function generate_directory_file_counts() {
  git ls-files '*.md' \
    | grep -v '^README.md$' \
    | cut -d/ -f1 \
    | sort | uniq -c \
    | while read count dir; do
        sed -i "s/__${dir}_DIRECTORY_COUNT__/${count}/g" "$filepath/README.md"
      done
}