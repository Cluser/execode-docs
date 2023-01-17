import { Module } from '@nestjs/common';
import { LineController } from './controllers/line.controller';
import { DataServicesModule } from './services/data-services/data-services.module';
import { LineUseCasesModule } from './use-cases/line-use-case.module';

@Module({
  imports: [
    DataServicesModule,
    LineUseCasesModule
  ],
  controllers: [LineController],
  providers: []
})
export class AppModule {}
