import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateLineDto } from 'src/core/dtos';
import { Line } from 'src/core/entities/line.entity';
import { LineUseCases } from 'src/use-cases/line.use-case';

@Controller()
export class LineController {
  constructor(private lineUseCases: LineUseCases) {}

  @Get()
  getLines(): Promise<Line[]> {
    return this.lineUseCases.getAllLines()
  }

  @Post()
  createLine(@Body() createLineDto: CreateLineDto): Promise<Line> {
    return this.lineUseCases.createLine(createLineDto)
  }
}
