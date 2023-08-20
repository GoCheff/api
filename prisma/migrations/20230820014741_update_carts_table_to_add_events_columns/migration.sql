/*
  Warnings:

  - Added the required column `event_date` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `locale` to the `carts` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_contact` to the `carts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "carts" ADD COLUMN     "event_date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "locale" TEXT NOT NULL,
ADD COLUMN     "observation" TEXT,
ADD COLUMN     "phone_contact" TEXT NOT NULL;
