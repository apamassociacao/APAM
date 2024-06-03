git_status_get_all_paths_relative() {
  git status --short | awk -F' ' '{print $2}'
}

git_status_get_all_paths_absolute() {
  git_status_get_all_paths_relative | xargs realpath
}

git_status_get_staged_paths_relative() {
  git -c core.safecrlf=false diff --name-only --cached
}

git_status_get_staged_paths_absolute() {
  git_status_get_staged_paths_relative | xargs realpath
}
