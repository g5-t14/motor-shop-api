#!/usr/bin/env bash
# exit on error
set -o errexit

yarn
yarn run build
yarn prisma migrate deploy 
yarn run dev 