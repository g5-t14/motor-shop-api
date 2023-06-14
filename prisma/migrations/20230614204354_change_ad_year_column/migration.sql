/*
  Warnings:

  - Changed the type of `year` on the `ads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "year",
ADD COLUMN     "year" VARCHAR(10) NOT NULL;
