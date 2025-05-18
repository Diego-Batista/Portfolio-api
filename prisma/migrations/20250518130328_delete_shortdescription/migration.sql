/*
  Warnings:

  - You are about to drop the `ShortDescription` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `shortDescription` to the `Post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShortDescription" DROP CONSTRAINT "ShortDescription_postId_fkey";

-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "shortDescription" TEXT NOT NULL;

-- DropTable
DROP TABLE "ShortDescription";
