/*
  Warnings:

  - Added the required column `lastModifiedDate` to the `Instruction` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lastModifiedDate` to the `InstructionStep` table without a default value. This is not possible if the table is not empty.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "surname" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_InstructionToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_InstructionToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Instruction" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InstructionToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "_InstructionStepToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_InstructionStepToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "InstructionStep" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_InstructionStepToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Instruction" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "lastModifiedDate" DATETIME NOT NULL,
    "machineId" INTEGER NOT NULL,
    CONSTRAINT "Instruction_machineId_fkey" FOREIGN KEY ("machineId") REFERENCES "Machine" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Instruction" ("description", "id", "machineId", "name") SELECT "description", "id", "machineId", "name" FROM "Instruction";
DROP TABLE "Instruction";
ALTER TABLE "new_Instruction" RENAME TO "Instruction";
CREATE TABLE "new_InstructionStep" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "imagePath" TEXT NOT NULL,
    "videoPath" TEXT NOT NULL,
    "lastModifiedDate" DATETIME NOT NULL,
    "instructionId" INTEGER NOT NULL,
    CONSTRAINT "InstructionStep_instructionId_fkey" FOREIGN KEY ("instructionId") REFERENCES "Instruction" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_InstructionStep" ("description", "id", "imagePath", "instructionId", "name", "videoPath") SELECT "description", "id", "imagePath", "instructionId", "name", "videoPath" FROM "InstructionStep";
DROP TABLE "InstructionStep";
ALTER TABLE "new_InstructionStep" RENAME TO "InstructionStep";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "_InstructionToUser_AB_unique" ON "_InstructionToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_InstructionToUser_B_index" ON "_InstructionToUser"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_InstructionStepToUser_AB_unique" ON "_InstructionStepToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_InstructionStepToUser_B_index" ON "_InstructionStepToUser"("B");
