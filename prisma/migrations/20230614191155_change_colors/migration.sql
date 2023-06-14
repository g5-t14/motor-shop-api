/*
  Warnings:

  - The values [PRETO,BRANCO,VERMELHO,LARANJA,AMARELO,VERDE,AZUL,ANIL,VIOLETA] on the enum `Colors` will be removed. If these variants are still used in the database, this will fail.
  - Added the required column `user_color` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Colors_new" AS ENUM ('Preto', 'Cinza', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo', 'VerdeClaro', 'VerdeEscuro', 'AzulClaro', 'AzulEscuro', 'Roxo', 'Rosa', 'Branco');
ALTER TABLE "ads" ALTER COLUMN "color" DROP DEFAULT;
ALTER TABLE "ads" ALTER COLUMN "color" TYPE "Colors_new" USING ("color"::text::"Colors_new");
ALTER TYPE "Colors" RENAME TO "Colors_old";
ALTER TYPE "Colors_new" RENAME TO "Colors";
DROP TYPE "Colors_old";
ALTER TABLE "ads" ALTER COLUMN "color" SET DEFAULT 'Cinza';
COMMIT;

-- AlterTable
ALTER TABLE "ads" ALTER COLUMN "color" SET DEFAULT 'Cinza';

-- AlterTable
ALTER TABLE "users" ADD COLUMN     "user_color" VARCHAR(7) NOT NULL;
