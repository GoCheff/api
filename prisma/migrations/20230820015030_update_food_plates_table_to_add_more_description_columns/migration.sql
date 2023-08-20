-- AlterTable
ALTER TABLE "food_plates" ADD COLUMN     "gluten_free" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "lactose_free" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "light" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "vegan" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "vegetarian" BOOLEAN NOT NULL DEFAULT false;
