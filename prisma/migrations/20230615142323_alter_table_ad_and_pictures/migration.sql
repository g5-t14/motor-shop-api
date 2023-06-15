/*
  Warnings:

  - You are about to drop the column `cover_img` on the `pictures` table. All the data in the column will be lost.
  - Added the required column `cover_img` to the `ads` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ads" ADD COLUMN     "cover_img" VARCHAR(127) NOT NULL;

-- AlterTable
ALTER TABLE "pictures" DROP COLUMN "cover_img";
