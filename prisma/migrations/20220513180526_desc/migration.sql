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
    "updatedAt" REAL NOT NULL DEFAULT 0
);
INSERT INTO "new_sensor" ("dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt") SELECT "dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt" FROM "sensor";
DROP TABLE "sensor";
ALTER TABLE "new_sensor" RENAME TO "sensor";
CREATE UNIQUE INDEX "sensor_name_key" ON "sensor"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
