#!/bin/bash

export LC_CTYPE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG="UTF-8"
filepath=$(git rev-parse --show-toplevel)

function generate_directory_file_counts() {
  find . -type d ! -path "$filepath" | while read dir; do
    dir_name=$(basename "$dir")
    count=$(git ls-files "$dir" | grep '\.md$' | wc -l)
    sed -i "s/__${dir_name}_DIRECTORY_COUNT__/${count}/g" "$filepath/README.md"
  done
}