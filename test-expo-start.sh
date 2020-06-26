# This is super hacky..
# If "npm run start:ci" outputs anything to stderr in 5s then return with an exit code
if timeout --preserve-status 5s npm run start:ci 2>&1 >/dev/null | grep -m 1 -c -e '.*' ; then
  timeout --preserve-status 5s npm run start:ci 2>&1 >/dev/null
  exit 1
else
  exit 0
fi