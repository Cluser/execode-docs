import { Module } from '@nestjs/common';
import { DocumentationController, LineController, MachineController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { LineUseCasesModule, MachineUseCasesModule, DocumentationUseCasesModule } from './use-cases';

@Module({
  imports: [
    DataServicesModule,
    LineUseCasesModule,
    MachineUseCasesModule,
    DocumentationUseCasesModule
  ],
  controllers: [LineController, MachineController, DocumentationController],
  providers: []
})
export class AppModule {}
