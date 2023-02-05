import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { MachineFactoryService } from './machine-factory.use-case';
import { MachineUseCases } from './machine.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [MachineFactoryService, MachineUseCases],
  exports: [MachineFactoryService, MachineUseCases],
})
export class MachineUseCasesModule {}