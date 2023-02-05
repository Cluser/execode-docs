import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos';
import { Line } from 'src/core/entities/line.entity';
import { MachineUseCases } from 'src/use-cases/machine-use-cases/machine.use-case';

@ApiTags("MachineController")
@Controller("MachineController")
export class MachineController {
  constructor(private machineUseCases: MachineUseCases) {}

  @Get("getMachines")
  getMachines(): Promise<Line[]> {
    return this.machineUseCases.getAllMachines()
  }

  @Get("getMachineById")
  getMachineById(@Query('id') id: number): Promise<Line> {
    return this.machineUseCases.getMachineById(id)
  }

  @Post("createMachine")
  createMachine(@Body() createLineDto: CreateLineDto): Promise<Line> {
    return this.machineUseCases.createMachine(createLineDto)
  }

  @Put("updateMachine")
  updateMachine(@Query('id') id: number, @Body() updarteLineDto: UpdateLineDto): Promise<Line> {
    return this.machineUseCases.updateMachine(id, updarteLineDto)
  }

  @Delete("deleteMachine")
  async deleteMachine(@Query('id') id: number): Promise<Line> {
    try {
      return await this.machineUseCases.deleteMachineById(id)
    } catch (error) { 
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }
}
