#!/bin/bash

export LC_CTYPE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG="UTF-8"
filepath=$(git rev-parse --show-toplevel)
readme="$filepath/README.md"

function generate_readme() {
  readme_template="$filepath/.husky/readme_template.md"
  cp -f "$readme_template" "$readme"

  generate_project_tree . |
    proejct_tree_formatter |
    LANG="UTF-8" perl -p0e 's/__PROJECT_TREE__/`cat`/se' -i "$readme"

  generate_directory_file_counts
}