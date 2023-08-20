/*
  Warnings:

  - Added the required column `city` to the `cheffs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cheffs" ADD COLUMN     "city" TEXT NOT NULL;
