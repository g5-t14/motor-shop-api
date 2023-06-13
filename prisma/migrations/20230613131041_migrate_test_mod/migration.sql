/*
  Warnings:

  - Made the column `is_seller` on table `users` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "users" ALTER COLUMN "is_seller" SET NOT NULL,
ALTER COLUMN "is_seller" DROP DEFAULT;
