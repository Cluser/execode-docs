import { Module } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts';
import { SqliteDataServices } from './sqlite-data-services.service';

@Module({
  imports: [],
  providers: [
    {
      provide: IDataServices,
      useClass: SqliteDataServices,
    },
  ],
  exports: [IDataServices],
})
export class SqliteDataServicesModule {}