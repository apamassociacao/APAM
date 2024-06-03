. "./.husky/lib/path.sh"
. "./.husky/lib/git-tools.sh"

export SPECIAL_DIRS
export SPECIAL_DIRS_ABSOLUTE

set_special_dirs() {
  ABSOLUTE="$(echo "$*" | xargs realpath)"
  RELATIVE="$(echo "$*" | xargs realpath -m -s --relative-to="$(realpath .)")"
  export SPECIAL_DIRS="$RELATIVE"
  export SPECIAL_DIRS_ABSOLUTE="$ABSOLUTE"
}

has_many_special_dirs_staged() {
  STAGED="$(git_status_get_staged_paths_absolute)"
  HAS_SPECIAL=0
  for path in $SPECIAL_DIRS_ABSOLUTE; do
    if [ "$(is_any_path_relative_to "$path" "$STAGED")" = "true" ]; then
      HAS_SPECIAL=$((HAS_SPECIAL + 1))
    fi
    if [ "$HAS_SPECIAL" -gt 1 ]; then
      printf "true"
      return 0
    fi
  done
  printf "false"
}

get_special_dirs_staged() {
  STAGED="$(git_status_get_staged_paths_absolute)"
  ARRAY=
  for path in $SPECIAL_DIRS_ABSOLUTE; do
    if [ "$(is_any_path_relative_to "$path" "$STAGED")" = "true" ]; then
      # ARRAY="$(printf '%s\n%s\n' "$ARRAY" "$path")"
      ARRAY="$ARRAY $path"
    fi
  done
  printf '%s' "$ARRAY" | sed 's/^\s//'
}
