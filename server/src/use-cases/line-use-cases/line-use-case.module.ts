import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { LineFactoryService } from './line-factory.use-case';
import { LineUseCases } from './line.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [LineFactoryService, LineUseCases],
  exports: [LineFactoryService, LineUseCases],
})
export class LineUseCasesModule {}