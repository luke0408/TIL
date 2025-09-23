#!/bin/bash

export LC_CTYPE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG="UTF-8"
filepath=$(git rev-parse --show-toplevel)
intro="$filepath/docs/intro.md"

function generate_intro() {
  intro_template="$filepath/.husky/intro/intro_template.md"
  cp -f "$intro_template" "$intro"

  generate_project_tree . |
    proejct_tree_formatter |
    LANG="UTF-8" perl -p0e 's/__PROJECT_TREE__/`cat`/se' -i "$intro"

  generate_directory_file_counts
}