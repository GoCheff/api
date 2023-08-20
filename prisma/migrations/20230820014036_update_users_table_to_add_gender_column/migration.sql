-- CreateEnum
CREATE TYPE "Gender" AS ENUM ('female', 'male', 'other', 'preferNotToSay');

-- AlterTable
ALTER TABLE "admins" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'preferNotToSay';

-- AlterTable
ALTER TABLE "cheffs" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'preferNotToSay';

-- AlterTable
ALTER TABLE "customers" ADD COLUMN     "gender" "Gender" NOT NULL DEFAULT 'preferNotToSay';
