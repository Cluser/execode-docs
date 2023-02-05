import { IsString, IsNotEmpty } from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class CreateMachineDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}

export class UpdateMachineDto extends PartialType(CreateMachineDto) {}