import { Injectable } from '@nestjs/common';
import { Documentation } from '@prisma/client';
import { CreateDocumentationDto, UpdateDocumentationDto } from 'src/core/dtos';

@Injectable()
export class DocumentationFactoryService {
  createNewDocumentation(createDocumentationDto: CreateDocumentationDto) {
    const newDocumentation: any = {
      id: undefined,
      name: createDocumentationDto.name,
      categoryId: createDocumentationDto.categoryId,
      machineId: createDocumentationDto.machineId
    };

    return newDocumentation;
  }

  updateDocumentation(updateDocumentationDto: UpdateDocumentationDto) {
    const updateDocumentation: Partial<Documentation> = {
      name: updateDocumentationDto.name
    };

    return updateDocumentation;
  }
}