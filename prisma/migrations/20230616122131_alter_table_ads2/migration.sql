/*
  Warnings:

  - Made the column `is_active` on table `ads` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "is_active" SET NOT NULL;
