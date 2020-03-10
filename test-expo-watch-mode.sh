# This is super hacky..
# If "npm start" outputs "Watch mode is not supported in this environment" in 30s then return with an exit code
if timeout --preserve-status 30s npm start -- --non-interactive | grep -m 1 -c -e 'Watch mode is not supported in this environment' ; then
  timeout --preserve-status 30s npm start -- --non-interactive
  exit 1
else
  exit 0
fi