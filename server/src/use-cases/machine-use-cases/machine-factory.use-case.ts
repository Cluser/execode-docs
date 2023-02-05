import { Injectable } from '@nestjs/common';
import { Machine } from '@prisma/client';
import { CreateMachineDto, UpdateMachineDto } from 'src/core/dtos';



@Injectable()
export class MachineFactoryService {
  createNewMachine(createMachineDto: CreateMachineDto) {
    const newMachine: Machine = {
      id: undefined,
      name: createMachineDto.name
    };

    return newMachine;
  }

  updateMachine(updateLineDto: UpdateMachineDto) {
    const updateMachine: Partial<Machine> = {
      name: updateLineDto.name
    };

    return updateMachine;
  }
}