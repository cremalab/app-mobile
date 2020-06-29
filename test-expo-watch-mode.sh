# This is super hacky..
# If "npm run start:ci" outputs "Watch mode is not supported in this environment" in 30s then return with an exit code
if timeout --preserve-status 30s npm run start:ci | grep -m 1 -c -e 'Watch mode is not supported in this environment' ; then
  timeout --preserve-status 30s npm run start:ci
  exit 1
else
  exit 0
fi