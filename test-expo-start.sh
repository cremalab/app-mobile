# This is super hacky..
# If "npm start" outputs anything to stderr in 5s then return with an exit code
if timeout --preserve-status 5s npm start -- --non-interactive 2>&1 >/dev/null | grep -m 1 -c -e '.*' ; then
  timeout --preserve-status 5s npm start -- --non-interactive 2>&1 >/dev/null
  exit 1
else
  exit 0
fi