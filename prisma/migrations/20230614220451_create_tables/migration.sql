-- CreateEnum
CREATE TYPE "Colors" AS ENUM ('Preto', 'Cinza', 'Marrom', 'Vermelho', 'Laranja', 'Amarelo', 'VerdeClaro', 'VerdeEscuro', 'AzulClaro', 'AzulEscuro', 'Roxo', 'Rosa', 'Branco');

-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(127) NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "password" VARCHAR(60) NOT NULL,
    "cpf" VARCHAR(11) NOT NULL,
    "phone" VARCHAR(11) NOT NULL,
    "birthdate" VARCHAR(8) NOT NULL,
    "description" TEXT NOT NULL,
    "is_seller" BOOLEAN NOT NULL,
    "cep" VARCHAR(8) NOT NULL,
    "slate" VARCHAR(127) NOT NULL,
    "city" VARCHAR(127) NOT NULL,
    "street" VARCHAR(127) NOT NULL,
    "number" VARCHAR(127) NOT NULL,
    "complement" VARCHAR(127) NOT NULL,
    "user_color" VARCHAR(7) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ads" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(127) NOT NULL,
    "model" VARCHAR(127) NOT NULL,
    "year" VARCHAR(10) NOT NULL,
    "fuel" VARCHAR(127) NOT NULL,
    "mileage" VARCHAR(127) NOT NULL,
    "color" "Colors" NOT NULL DEFAULT 'Cinza',
    "fipe_table" INTEGER NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "cover_img" VARCHAR(127) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "ads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "users_cpf_key" ON "users"("cpf");

-- AddForeignKey
ALTER TABLE "ads" ADD CONSTRAINT "ads_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
