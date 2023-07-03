// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn build
npx prisma generate
npx prisma migrate dev 
npx prisma migrate deploy 
yarn start