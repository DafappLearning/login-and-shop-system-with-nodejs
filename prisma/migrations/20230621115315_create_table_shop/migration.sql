-- CreateTable
CREATE TABLE `shop` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `item_name` VARCHAR(100) NULL,
    `price` INTEGER NOT NULL,
    `category` VARCHAR(100) NULL,
    `description` VARCHAR(100) NULL,
    `owner` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci ENGINE InnoDB;

-- AddForeignKey
ALTER TABLE `shop` ADD CONSTRAINT `shop_owner_fkey` FOREIGN KEY (`owner`) REFERENCES `users`(`username`) ON DELETE RESTRICT ON UPDATE CASCADE;
