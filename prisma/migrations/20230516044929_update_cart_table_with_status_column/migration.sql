-- CreateEnum
CREATE TYPE "CartStatus" AS ENUM ('open', 'sent', 'approved', 'rejected', 'paid', 'canceled', 'delivered');

-- AlterTable
ALTER TABLE "carts" ADD COLUMN     "status" "CartStatus" NOT NULL DEFAULT 'open';
