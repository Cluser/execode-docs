import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateLineDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateLineDto extends PartialType(CreateLineDto) {}