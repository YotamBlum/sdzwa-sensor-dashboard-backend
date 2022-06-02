/*
  Warnings:

  - You are about to drop the column `format` on the `sensor` table. All the data in the column will be lost.
  - You are about to alter the column `source` on the `sensor` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.
  - You are about to alter the column `type` on the `sensor` table. The data in that column could be lost. The data in that column will be cast from `String` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'description',
    "type" INTEGER NOT NULL DEFAULT 0,
    "source" INTEGER NOT NULL DEFAULT 0,
    "locationX" REAL NOT NULL DEFAULT 0,
    "locationY" REAL NOT NULL DEFAULT 0,
    "dateStr" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 3,
    "installedAt" REAL NOT NULL DEFAULT 0,
    "updatedAt" REAL NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_sensor" ("dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "source", "status", "type", "updatedAt", "url") SELECT "dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "source", "status", "type", "updatedAt", "url" FROM "sensor";
DROP TABLE "sensor";
ALTER TABLE "new_sensor" RENAME TO "sensor";
CREATE UNIQUE INDEX "sensor_name_key" ON "sensor"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
