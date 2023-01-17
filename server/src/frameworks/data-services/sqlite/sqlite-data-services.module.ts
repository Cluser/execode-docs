import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SQLITE_CONFIG } from 'src/configuration';
import { IDataServices } from 'src/core/abstracts';
import { Line } from 'src/core/entities';
import { SqliteDataServices } from './sqlite-data-services.service';

@Module({
  imports: [
    TypeOrmModule.forRoot(SQLITE_CONFIG),
    TypeOrmModule.forFeature([Line])
  ],
  providers: [
    {
      provide: IDataServices,
      useClass: SqliteDataServices,
    },
  ],
  exports: [IDataServices],
})
export class SqliteDataServicesModule {}