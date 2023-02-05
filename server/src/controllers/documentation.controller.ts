import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Machine } from '@prisma/client';
import { CreateLineDto, UpdateLineDto } from 'src/core/dtos';
import { DocumentationUseCases } from 'src/use-cases';

@ApiTags("DocumentationController")
@Controller("DocumentationController")
export class DocumentationController {
  constructor(private documentationUseCases: DocumentationUseCases) {}

  @Get("getDocumentations")
  getDocumentations(): Promise<Machine[]> {
    return this.documentationUseCases.getAllDocumentations()
  }

  @Get("getDocumentationById")
  getDocumentationById(@Query('id') id: number): Promise<Machine> {
    return this.documentationUseCases.getDocumentationById(id)
  }

  @Post("createDocumentation")
  createDocumentation(@Body() createLineDto: CreateLineDto): Promise<Machine> {
    return this.documentationUseCases.createDocumentation(createLineDto)
  }

  @Put("updateDocumentation")
  updateDocumentation(@Query('id') id: number, @Body() updarteLineDto: UpdateLineDto): Promise<Machine> {
    return this.documentationUseCases.updateDocumentation(id, updarteLineDto)
  }

  @Delete("deleteDocumentation")
  async deleteDocumentation(@Query('id') id: number): Promise<Machine> {
    try {
      return await this.documentationUseCases.deleteDocumentationById(id)
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
