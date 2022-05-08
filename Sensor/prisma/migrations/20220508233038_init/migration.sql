/*
  Warnings:

  - You are about to drop the column `username` on the `sensor` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `sensor_username_key` ON `sensor`;

-- AlterTable
ALTER TABLE `sensor` DROP COLUMN `username`,
    ADD COLUMN `dateStr` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `description` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `installedAt` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `locationX` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `locationY` DOUBLE NOT NULL DEFAULT 0,
    ADD COLUMN `name` VARCHAR(191) NOT NULL DEFAULT '',
    ADD COLUMN `status` INTEGER NOT NULL DEFAULT 3,
    ADD COLUMN `type` INTEGER NOT NULL DEFAULT -1,
    ADD COLUMN `updatedAt` DOUBLE NOT NULL DEFAULT 0;

-- CreateTable
CREATE TABLE `user` (
    `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    `firstName` VARCHAR(255) NOT NULL,
    `lastName` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `salt` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `type` (
    `type_0` VARCHAR(255) NOT NULL,
    `type_1` VARCHAR(255) NOT NULL,
    `type_2` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `type_type_0_key`(`type_0`),
    UNIQUE INDEX `type_type_1_key`(`type_1`),
    UNIQUE INDEX `type_type_2_key`(`type_2`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `status` (
    `status_0` VARCHAR(255) NOT NULL,
    `status_1` VARCHAR(255) NOT NULL,
    `status_2` VARCHAR(255) NOT NULL,
    `status_3` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `status_status_0_key`(`status_0`),
    UNIQUE INDEX `status_status_1_key`(`status_1`),
    UNIQUE INDEX `status_status_2_key`(`status_2`),
    UNIQUE INDEX `status_status_3_key`(`status_3`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
