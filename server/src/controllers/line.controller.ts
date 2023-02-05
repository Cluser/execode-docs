import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos';
import { Line } from 'src/core/entities/line.entity';
import { LineUseCases } from 'src/use-cases/line-use-cases/line.use-case';

@ApiTags("LineController")
@Controller("LineController")
export class LineController {
  constructor(private lineUseCases: LineUseCases) {}

  @Get("getLines")
  getLines(): Promise<Line[]> {
    return this.lineUseCases.getAllLines()
  }

  @Get("getLineById")
  getLineById(@Query('id') id: number): Promise<Line> {
    return this.lineUseCases.getLineById(id)
  }

  @Post("createLine")
  createLine(@Body() createLineDto: CreateLineDto): Promise<Line> {
    return this.lineUseCases.createLine(createLineDto)
  }

  @Put("updateLine")
  updateLine(@Query('id') id: number, @Body() updarteLineDto: UpdateLineDto): Promise<Line> {
    return this.lineUseCases.updateLine(id, updarteLineDto)
  }

  @Delete("deleteLine")
  async deleteLine(@Query('id') id: number): Promise<Line> {
    try {
      return await this.lineUseCases.deleteLineById(id)
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
