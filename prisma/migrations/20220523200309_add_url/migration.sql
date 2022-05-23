/*
  Warnings:

  - You are about to drop the column `type_0` on the `type` table. All the data in the column will be lost.
  - You are about to drop the column `type_1` on the `type` table. All the data in the column will be lost.
  - You are about to drop the column `type_2` on the `type` table. All the data in the column will be lost.
  - Added the required column `type_id` to the `type` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type_name` to the `type` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'description',
    "type" INTEGER NOT NULL DEFAULT -1,
    "locationX" REAL NOT NULL DEFAULT 0,
    "locationY" REAL NOT NULL DEFAULT 0,
    "dateStr" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 3,
    "installedAt" REAL NOT NULL DEFAULT 0,
    "updatedAt" REAL NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_sensor" ("dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt") SELECT "dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt" FROM "sensor";
DROP TABLE "sensor";
ALTER TABLE "new_sensor" RENAME TO "sensor";
CREATE UNIQUE INDEX "sensor_name_key" ON "sensor"("name");
CREATE TABLE "new_type" (
    "type_id" INTEGER NOT NULL,
    "type_name" TEXT NOT NULL
);
DROP TABLE "type";
ALTER TABLE "new_type" RENAME TO "type";
CREATE UNIQUE INDEX "type_type_id_key" ON "type"("type_id");
CREATE UNIQUE INDEX "type_type_name_key" ON "type"("type_name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
