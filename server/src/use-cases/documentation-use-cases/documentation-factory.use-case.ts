import { Injectable } from '@nestjs/common';
import { Documentation } from '@prisma/client';
import { CreateDocumentationDto, UpdateDocumentationDto } from 'src/core/dtos';

@Injectable()
export class DocumentationFactoryService {
  createNewDocumentation(createDocumentationDto: CreateDocumentationDto) {
    const newDocumentation: Documentation = {
      id: undefined,
      name: createDocumentationDto.name
    };

    return newDocumentation;
  }

  updateDocumentation(updateDocumentationDto: UpdateDocumentationDto) {
    const updateMachine: Partial<Documentation> = {
      name: updateDocumentationDto.name
    };

    return updateMachine;
  }
}