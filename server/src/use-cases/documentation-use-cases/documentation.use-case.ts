import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { CreateDocumentationDto, UpdateDocumentationDto } from 'src/core/dtos';
import { Documentation } from '@prisma/client';
import { DocumentationFactoryService } from './documentation-factory.use-case';


@Injectable()
export class DocumentationUseCases {
  constructor(private dataServices: IDataServices, private documentationFactoryService: DocumentationFactoryService) {}

  getAllDocumentations(): Promise<any> {
    return this.dataServices.documentations.getAll();
  }

  getDocumentationById(id: any): Promise<Documentation> {
    return this.dataServices.documentations.get(id);
  }

  createDocumentation(createDocumentationDto: CreateDocumentationDto): Promise<Documentation> {
    const documentation = this.documentationFactoryService.createNewDocumentation(createDocumentationDto);
    return this.dataServices.documentations.create(documentation);
  }

  updateDocumentation(documentationId: number, updateDocumentationDto: UpdateDocumentationDto): Promise<Documentation> {
    const documentation = this.documentationFactoryService.updateDocumentation(updateDocumentationDto);
    return this.dataServices.documentations.update(documentationId, documentation);
  }

  deleteDocumentationById(id: number): Promise<Documentation> {
    return this.dataServices.documentations.delete(id);
  }

  uploadDocumentation(file: Express.Multer.File): string {
    return file.destination + file.filename;
  }
}