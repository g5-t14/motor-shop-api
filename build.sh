// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn add crypto
yarn add @types/node
yarn build
npx prisma migrate deploy 
yarn start