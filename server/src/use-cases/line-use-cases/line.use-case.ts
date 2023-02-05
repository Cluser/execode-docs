import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos';
import { Line } from 'src/core/entities';
import { LineFactoryService } from './line-factory.use-case';


@Injectable()
export class LineUseCases {
  constructor(private dataServices: IDataServices, private lineFactoryService: LineFactoryService) {}

  getAllLines(): Promise<any> {
    return this.dataServices.lines.getAll();
  }

  getLineById(id: any): Promise<Line> {
    return this.dataServices.lines.get(id);
  }

  createLine(createLineDto: CreateLineDto): Promise<Line> {
    const line = this.lineFactoryService.createNewLine(createLineDto);
    return this.dataServices.lines.create(line);
  }

  updateLine(lineId: number, updateLineDto: UpdateLineDto): Promise<Line> {
    const line = this.lineFactoryService.updateLine(updateLineDto);
    return this.dataServices.lines.update(lineId, line);
  }

  deleteLineById(id: number): Promise<Line> {
    return this.dataServices.lines.delete(id);
  }
}