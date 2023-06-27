// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn run build
yarn prisma migrate dev 
yarn run dev 