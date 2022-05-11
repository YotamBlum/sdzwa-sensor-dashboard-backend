-- CreateTable
CREATE TABLE "sensor" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL DEFAULT '',
    "description" TEXT NOT NULL DEFAULT '',
    "type" INTEGER NOT NULL DEFAULT -1,
    "locationX" REAL NOT NULL DEFAULT 0,
    "locationY" REAL NOT NULL DEFAULT 0,
    "dateStr" TEXT NOT NULL DEFAULT '',
    "status" INTEGER NOT NULL DEFAULT 3,
    "installedAt" REAL NOT NULL DEFAULT 0,
    "updatedAt" REAL NOT NULL DEFAULT 0
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "salt" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "type" (
    "type_0" TEXT NOT NULL,
    "type_1" TEXT NOT NULL,
    "type_2" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "status" (
    "status_0" TEXT NOT NULL,
    "status_1" TEXT NOT NULL,
    "status_2" TEXT NOT NULL,
    "status_3" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "sensor_id" INTEGER NOT NULL,
    CONSTRAINT "post_sensor_id_fkey" FOREIGN KEY ("sensor_id") REFERENCES "sensor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "type_type_0_key" ON "type"("type_0");

-- CreateIndex
CREATE UNIQUE INDEX "type_type_1_key" ON "type"("type_1");

-- CreateIndex
CREATE UNIQUE INDEX "type_type_2_key" ON "type"("type_2");

-- CreateIndex
CREATE UNIQUE INDEX "status_status_0_key" ON "status"("status_0");

-- CreateIndex
CREATE UNIQUE INDEX "status_status_1_key" ON "status"("status_1");

-- CreateIndex
CREATE UNIQUE INDEX "status_status_2_key" ON "status"("status_2");

-- CreateIndex
CREATE UNIQUE INDEX "status_status_3_key" ON "status"("status_3");
