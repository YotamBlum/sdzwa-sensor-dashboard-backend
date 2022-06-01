-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT 'description',
    "type" TEXT NOT NULL DEFAULT '',
    "source" TEXT NOT NULL DEFAULT '',
    "format" TEXT NOT NULL DEFAULT '',
    "locationX" REAL NOT NULL DEFAULT 0,
    "locationY" REAL NOT NULL DEFAULT 0,
    "dateStr" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 3,
    "installedAt" REAL NOT NULL DEFAULT 0,
    "updatedAt" REAL NOT NULL DEFAULT 0,
    "url" TEXT NOT NULL DEFAULT ''
);
INSERT INTO "new_sensor" ("dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt", "url") SELECT "dateStr", "description", "id", "installedAt", "locationX", "locationY", "name", "status", "type", "updatedAt", "url" FROM "sensor";
DROP TABLE "sensor";
ALTER TABLE "new_sensor" RENAME TO "sensor";
CREATE UNIQUE INDEX "sensor_name_key" ON "sensor"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
