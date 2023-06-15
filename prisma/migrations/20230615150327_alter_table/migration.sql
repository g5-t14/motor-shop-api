/*
  Warnings:

  - A unique constraint covering the columns `[ad_id]` on the table `pictures` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "pictures_ad_id_key" ON "pictures"("ad_id");
