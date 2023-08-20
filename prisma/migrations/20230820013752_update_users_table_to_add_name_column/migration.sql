/*
  Warnings:

  - Added the required column `name` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `cheffs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `customers` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "cheffs" ADD COLUMN     "name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "name" TEXT NOT NULL;
