/*
  Warnings:

  - Added the required column `register_reason` to the `cheffs` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "RegisterStatus" AS ENUM ('pending', 'approved', 'rejected');

-- AlterTable
ALTER TABLE "cheffs" ADD COLUMN     "register_reason" TEXT NOT NULL,
ADD COLUMN     "register_status" "RegisterStatus" NOT NULL DEFAULT 'pending';
