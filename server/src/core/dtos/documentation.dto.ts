import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateDocumentationDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateDocumentationDto extends PartialType(CreateDocumentationDto) {}