/*
  Warnings:

  - You are about to drop the column `cover_img` on the `ads` table. All the data in the column will be lost.
  - You are about to drop the column `slate` on the `users` table. All the data in the column will be lost.
  - Added the required column `state` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ads" DROP CONSTRAINT "ads_user_id_fkey";

-- AlterTable
ALTER TABLE "ads" DROP COLUMN "cover_img";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "slate",
ADD COLUMN     "state" VARCHAR(127) NOT NULL;

-- CreateTable
CREATE TABLE "pictures" (
    "id" SERIAL NOT NULL,
    "cover_img" VARCHAR(127) NOT NULL,
    "picture_1" VARCHAR(127) NOT NULL,
    "picture_2" VARCHAR(127) NOT NULL,
    "picture_3" VARCHAR(127),
    "picture_4" VARCHAR(127),
    "picture_5" VARCHAR(127),
    "picture_6" VARCHAR(127),
    "ad_id" INTEGER NOT NULL,

    CONSTRAINT "pictures_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "pictures" ADD CONSTRAINT "pictures_ad_id_fkey" FOREIGN KEY ("ad_id") REFERENCES "ads"("id") ON DELETE CASCADE ON UPDATE CASCADE;
