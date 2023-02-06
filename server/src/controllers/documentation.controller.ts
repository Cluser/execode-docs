import { Body, Controller, Delete, Get, HttpException, HttpStatus, Post, Put, Query, UploadedFile } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Documentation } from '@prisma/client';
import { ApiFile } from 'src/core/decorators/api-file.decorator';
import { CreateDocumentationDto, UpdateDocumentationDto } from 'src/core/dtos';
import { DocumentationUseCases } from 'src/use-cases';

@ApiTags("DocumentationController")
@Controller("DocumentationController")
export class DocumentationController {
  constructor(private documentationUseCases: DocumentationUseCases) {}

  @Get("getDocumentations")
  getDocumentations(): Promise<Documentation[]> {
    return this.documentationUseCases.getAllDocumentations()
  }

  @Get("getDocumentationById")
  getDocumentationById(@Query('id') id: number): Promise<Documentation> {
    return this.documentationUseCases.getDocumentationById(id)
  }

  @Post("createDocumentation")
  @ApiFile('documentation', ['application/pdf'])
  createDocumentation(@Body() createDocumentationDto: CreateDocumentationDto): Promise<Documentation> {
    return this.documentationUseCases.createDocumentation(createDocumentationDto)
  }

  @Put("updateDocumentation")
  updateDocumentation(@Query('id') id: number, @Body() updateDocumentationDto: UpdateDocumentationDto): Promise<Documentation> {
    return this.documentationUseCases.updateDocumentation(id, updateDocumentationDto)
  }

  @Delete("deleteDocumentation")
  async deleteDocumentation(@Query('id') id: number): Promise<Documentation> {
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

  @Post('uploadDocumentation')
  @ApiFile('documentation', ['application/pdf'])
  uploadDocumentation(@UploadedFile() file: Express.Multer.File): string {
    return this.documentationUseCases.uploadDocumentation(file);
  }
}
