// build.sh
#!/usr/bin/env bash
# exit on error
set -o errexit

npm install
npm run build
npx prisma generate
npx prisma migrate dev 
npx prisma migrate deploy 
npm run start