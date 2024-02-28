-- DropIndex
DROP INDEX `Post_urlSlug_key` ON `Post`;

-- AlterTable
ALTER TABLE `Post` MODIFY `urlSlug` TEXT NOT NULL,
    MODIFY `porttrait` TEXT NOT NULL;
