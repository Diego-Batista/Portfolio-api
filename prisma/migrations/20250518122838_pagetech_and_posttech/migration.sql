/*
  Warnings:

  - You are about to drop the `Techs` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Techs" DROP CONSTRAINT "Techs_pageId_fkey";

-- DropForeignKey
ALTER TABLE "Techs" DROP CONSTRAINT "Techs_postId_fkey";

-- DropTable
DROP TABLE "Techs";

-- CreateTable
CREATE TABLE "PostTech" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "postId" INTEGER NOT NULL,

    CONSTRAINT "PostTech_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PageTech" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "pageId" INTEGER NOT NULL,

    CONSTRAINT "PageTech_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "PostTech" ADD CONSTRAINT "PostTech_postId_fkey" FOREIGN KEY ("postId") REFERENCES "Post"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PageTech" ADD CONSTRAINT "PageTech_pageId_fkey" FOREIGN KEY ("pageId") REFERENCES "Page"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
