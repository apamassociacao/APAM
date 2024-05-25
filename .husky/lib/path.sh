is_any_path_relative_to() {
  # NOTE: Paths must not have whitespaces
  RELATIVE=$1
  PATH_ARRAY=$2
  for path in $PATH_ARRAY; do
    # shellcheck disable=SC2143
    if [ "$(echo "$path" | grep -E "^$RELATIVE")" ]; then
      printf "true"
      return 0
    fi
  done
  printf "false"
}
