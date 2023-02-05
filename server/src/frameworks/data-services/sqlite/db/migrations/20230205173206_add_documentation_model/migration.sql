-- CreateTable
CREATE TABLE "Documentation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Documentation_name_key" ON "Documentation"("name");
