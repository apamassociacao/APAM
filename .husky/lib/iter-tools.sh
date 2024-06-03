count_true() {
  echo "$*" | grep -o "true" | wc -l
}
