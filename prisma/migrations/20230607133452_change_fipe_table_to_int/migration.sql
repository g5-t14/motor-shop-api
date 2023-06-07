/*
  Warnings:

  - Changed the type of `fipe_table` on the `ads` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "ads" DROP COLUMN "fipe_table",
ADD COLUMN     "fipe_table" INTEGER NOT NULL;
