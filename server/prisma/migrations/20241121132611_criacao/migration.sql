/*
  Warnings:

  - You are about to alter the column `email` on the `User` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(80)`.

*/
-- AlterTable
ALTER TABLE `User` MODIFY `email` VARCHAR(80) NOT NULL;
