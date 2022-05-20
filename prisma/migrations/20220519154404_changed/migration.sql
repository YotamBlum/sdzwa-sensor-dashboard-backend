/*
  Warnings:

  - You are about to drop the column `status_0` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `status_1` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `status_2` on the `status` table. All the data in the column will be lost.
  - You are about to drop the column `status_3` on the `status` table. All the data in the column will be lost.
  - Added the required column `status_id` to the `status` table without a default value. This is not possible if the table is not empty.
  - Added the required column `status_name` to the `status` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_status" (
    "status_id" INTEGER NOT NULL,
    "status_name" TEXT NOT NULL
);
DROP TABLE "status";
ALTER TABLE "new_status" RENAME TO "status";
CREATE UNIQUE INDEX "status_status_id_key" ON "status"("status_id");
CREATE UNIQUE INDEX "status_status_name_key" ON "status"("status_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
