/*
  Warnings:

  - A unique constraint covering the columns `[email,deleted_at]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email,deleted_at]` on the table `customers` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "admins_email_key";

-- DropIndex
DROP INDEX "customers_email_key";

-- CreateIndex
CREATE UNIQUE INDEX "admins_email_deleted_at_key" ON "admins"("email", "deleted_at");

-- CreateIndex
CREATE UNIQUE INDEX "customers_email_deleted_at_key" ON "customers"("email", "deleted_at");
