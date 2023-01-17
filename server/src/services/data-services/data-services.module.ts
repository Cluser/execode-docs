import { Module } from '@nestjs/common';
import { SqliteDataServicesModule } from 'src/frameworks/data-services/sqlite/sqlite-data-services.module';

@Module({
  imports: [SqliteDataServicesModule],
  exports: [SqliteDataServicesModule],
})
export class DataServicesModule {}