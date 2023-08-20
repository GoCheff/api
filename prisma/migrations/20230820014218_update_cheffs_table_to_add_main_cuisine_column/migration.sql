/*
  Warnings:

  - Added the required column `main_cuisine` to the `cheffs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "cheffs" ADD COLUMN     "main_cuisine" TEXT NOT NULL;
