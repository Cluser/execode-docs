import { Module } from '@nestjs/common';
import { DataServicesModule } from 'src/services/data-services/data-services.module';
import { DocumentationFactoryService } from './documentation-factory.use-case';
import { DocumentationUseCases } from './documentation.use-case';

@Module({
  imports: [DataServicesModule],
  providers: [DocumentationFactoryService, DocumentationUseCases],
  exports: [DocumentationFactoryService, DocumentationUseCases],
})
export class DocumentationUseCasesModule {}