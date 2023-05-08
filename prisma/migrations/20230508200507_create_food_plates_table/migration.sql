-- CreateTable
CREATE TABLE "food_plates" (
    "id" SERIAL NOT NULL,
    "cheff_id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "min_serve" INTEGER NOT NULL,
    "max_serve" INTEGER NOT NULL,
    "cook_time" DOUBLE PRECISION NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3),

    CONSTRAINT "food_plates_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "food_plates" ADD CONSTRAINT "food_plates_cheff_id_fkey" FOREIGN KEY ("cheff_id") REFERENCES "cheffs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
