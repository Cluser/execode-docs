/*
  Warnings:

  - Added the required column `lineId` to the `Machine` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Machine" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "lineId" INTEGER NOT NULL,
    CONSTRAINT "Machine_lineId_fkey" FOREIGN KEY ("lineId") REFERENCES "Line" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Machine" ("id", "name") SELECT "id", "name" FROM "Machine";
DROP TABLE "Machine";
ALTER TABLE "new_Machine" RENAME TO "Machine";
CREATE UNIQUE INDEX "Machine_name_key" ON "Machine"("name");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
