import { Injectable } from '@nestjs/common';
import { Line } from '@prisma/client';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos/line.dto';


@Injectable()
export class LineFactoryService {
  createNewLine(createLineDto: CreateLineDto) {
    const newLine: Line = {
      id: undefined,
      name: createLineDto.name
    };

    return newLine;
  }

  updateLine(updateLineDto: UpdateLineDto) {
    const newLine: Partial<Line> = {
      name: updateLineDto.name
    };

    return newLine;
  }
}