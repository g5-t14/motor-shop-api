/*
  Warnings:

  - You are about to drop the `addresses` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `cep` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `city` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `number` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `slate` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `street` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "addresses" DROP CONSTRAINT "addresses_user_id_fkey";

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "cep" VARCHAR(8) NOT NULL,
ADD COLUMN     "city" VARCHAR(127) NOT NULL,
ADD COLUMN     "complement" VARCHAR(127),
ADD COLUMN     "number" VARCHAR(127) NOT NULL,
ADD COLUMN     "slate" VARCHAR(127) NOT NULL,
ADD COLUMN     "street" VARCHAR(127) NOT NULL;

-- DropTable
DROP TABLE "addresses";
