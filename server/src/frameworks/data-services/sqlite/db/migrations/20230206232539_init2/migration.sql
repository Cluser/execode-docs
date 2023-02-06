/*
  Warnings:

  - Added the required column `categoryId` to the `Documentation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Documentation" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "machineId" INTEGER NOT NULL,
    CONSTRAINT "Documentation_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "DocumentationCategory" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Documentation_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Documentation" ("id", "machineId", "name") SELECT "id", "machineId", "name" FROM "Documentation";
DROP TABLE "Documentation";
ALTER TABLE "new_Documentation" RENAME TO "Documentation";
CREATE UNIQUE INDEX "Documentation_name_key" ON "Documentation"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
