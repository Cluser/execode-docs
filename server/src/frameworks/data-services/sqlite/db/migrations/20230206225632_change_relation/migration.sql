/*
  Warnings:

  - The primary key for the `Documentation` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Documentation` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documentation" (
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,

    PRIMARY KEY ("categoryId", "machineId"),
    CONSTRAINT "Documentation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "DocumentationCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documentation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documentation" ("categoryId", "machineId", "name") SELECT "categoryId", "machineId", "name" FROM "Documentation";
DROP TABLE "Documentation";
ALTER TABLE "new_Documentation" RENAME TO "Documentation";
CREATE UNIQUE INDEX "Documentation_name_key" ON "Documentation"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
