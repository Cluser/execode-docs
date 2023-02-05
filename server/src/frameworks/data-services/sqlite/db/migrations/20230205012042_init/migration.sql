-- CreateTable
CREATE TABLE "Line" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Machine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Line_name_key" ON "Line"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Machine_name_key" ON "Machine"("name");
