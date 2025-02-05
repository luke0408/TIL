#!/bin/bash

export LC_CTYPE=en_US.UTF-8
export LC_ALL=en_US.UTF-8
export LANG="UTF-8"
filepath=$(git rev-parse --show-toplevel)
ignore_files=$(jq -r '.ignore_files | join("|")' "$filepath"/.husky/readme/setting.json)

function generate_project_tree() {
  tree . -I "$ignore_files" -P "*.md" -f --dirsfirst --noreport --prune -I '~'
}

function proejct_tree_formatter() {
  while IFS= read line; do
    echo "$line" |
      sed -e 's/[|]-\+/┗/g' |
      sed -e 's/[│]/┃/g' |
      sed -e 's/[└]/┗/g' |
      sed -e 's/[├]/┣/g' |
      sed -e 's/[─]/━/g' |
      sed -e "s:\(━ \+\)\(\(.*/\)\([^/]\+\)\):\1📂[**\4**](\2)<\/br>:g" |
      sed -e "s:\[\*\*\(.*\)\.md\*\*\]:📄\[**\1\**]:g" |
      sed -e "s=$filepath/=./=g" |
      sed -e "s=$filepath=./TIL</br>=g" |
      sed -e 's/━━/━/g' |
      sed -e "s=^\.=📦[**TIL**](./)</br>=" |
      sed -e 's/ /\&nbsp;\&nbsp;/g' |
      sed -e 's/&nbsp;📂/📂/g' |
      sed -e 's/📂📄/📄/g'
  done
}
