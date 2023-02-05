import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateLineDto, UpdateMachineDto } from 'src/core/dtos';
import { Machine } from '@prisma/client';
import { MachineFactoryService } from './machine-factory.use-case';


@Injectable()
export class MachineUseCases {
  constructor(private dataServices: IDataServices, private machineFactoryService: MachineFactoryService) {}

  getAllMachines(): Promise<any> {
    return this.dataServices.machines.getAll();
  }

  getMachineById(id: any): Promise<Machine> {
    return this.dataServices.machines.get(id);
  }

  createMachine(createLineDto: CreateLineDto): Promise<Machine> {
    const machine = this.machineFactoryService.createNewMachine(createLineDto);
    return this.dataServices.machines.create(machine);
  }

  updateMachine(machineId: number, updateMachineDto: UpdateMachineDto): Promise<Machine> {
    const machine = this.machineFactoryService.updateMachine(updateMachineDto);
    return this.dataServices.machines.update(machineId, machine);
  }

  deleteMachineById(id: number): Promise<Machine> {
    return this.dataServices.machines.delete(id);
  }
}