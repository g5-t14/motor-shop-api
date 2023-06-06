-- CreateTable
CREATE TABLE "ads" (
    "id" SERIAL NOT NULL,
    "brand" VARCHAR(127) NOT NULL,
    "model" VARCHAR(127) NOT NULL,
    "year" DATE NOT NULL,
    "fuel" VARCHAR(127) NOT NULL,
    "mileage" VARCHAR(127) NOT NULL,
    "color" VARCHAR(127) NOT NULL,
    "fipe_table" VARCHAR(127) NOT NULL,
    "price" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "cover_img" VARCHAR(127) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "ads_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ads_model_key" ON "ads"("model");
