#!/bin/bash

export LC_CTYPE=C.UTF-8
export LC_ALL=C.UTF-8
export LANG="C.UTF-8"
filepath=$(git rev-parse --show-toplevel)

function generate_project_tree() {
  python3 "$filepath/.husky/intro/tree_generator.py" "$filepath"
}

function proejct_tree_formatter() {
  cat
}
