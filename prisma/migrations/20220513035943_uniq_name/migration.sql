/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `sensor` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "sensor_name_key" ON "sensor"("name");
