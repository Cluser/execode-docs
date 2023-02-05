import { Module } from '@nestjs/common';
import { LineController, MachineController } from './controllers';
import { DataServicesModule } from './services/data-services/data-services.module';
import { LineUseCasesModule } from './use-cases/line-use-cases/line-use-case.module';
import { MachineUseCasesModule } from './use-cases/machine-use-cases/machine-use-case.module';

@Module({
  imports: [
    DataServicesModule,
    LineUseCasesModule,
    MachineUseCasesModule
  ],
  controllers: [LineController, MachineController],
  providers: []
})
export class AppModule {}
