-- DropForeignKey
ALTER TABLE `post` DROP FOREIGN KEY `Post_id_fkey`;

-- AddForeignKey
ALTER TABLE `Post` ADD CONSTRAINT `Post_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
