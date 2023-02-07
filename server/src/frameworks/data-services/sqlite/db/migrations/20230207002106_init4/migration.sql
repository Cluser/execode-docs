/*
  Warnings:

  - You are about to drop the `Step` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `description` to the `Instruction` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Step_name_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Step";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "InstructionStep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "instructionId" INTEGER NOT NULL,
    CONSTRAINT "InstructionStep_instructionId_fkey" FOREIGN KEY ("instructionId") REFERENCES "Instruction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instruction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "machineId" INTEGER NOT NULL,
    CONSTRAINT "Instruction_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Instruction" ("id", "machineId", "name") SELECT "id", "machineId", "name" FROM "Instruction";
DROP TABLE "Instruction";
ALTER TABLE "new_Instruction" RENAME TO "Instruction";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
