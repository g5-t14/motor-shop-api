/*
  Warnings:

  - The `color` column on the `ads` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "Colors" AS ENUM ('PRETO', 'BRANCO', 'VERMELHO', 'LARANJA', 'AMARELO', 'VERDE', 'AZUL', 'ANIL', 'VIOLETA');

-- AlterTable
ALTER TABLE "ads" DROP COLUMN "color",
ADD COLUMN     "color" "Colors" NOT NULL DEFAULT 'ANIL';
