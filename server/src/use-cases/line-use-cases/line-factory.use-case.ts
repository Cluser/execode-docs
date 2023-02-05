import { Injectable } from '@nestjs/common';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos/line.dto';
import { Line } from 'src/core/entities';


@Injectable()
export class LineFactoryService {
  createNewLine(createLineDto: CreateLineDto) {
    const newLine = new Line();
    newLine.name = createLineDto.name;

    return newLine;
  }

  updateLine(updateLineDto: UpdateLineDto) {
    const newLine = new Line();
    newLine.name = updateLineDto.name;

    return newLine;
  }
}