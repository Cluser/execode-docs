import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices, IGenericRepository } from 'src/core/abstracts';
import { SqliteGenericRepository } from './sqlite-generic-repository';
import { Line } from 'src/core/entities';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class SqliteDataServices implements IDataServices, OnApplicationBootstrap {

  lines: SqliteGenericRepository<Line>;

  constructor(@InjectRepository(Line) private lineRepository: Repository<Line>) {}

  onApplicationBootstrap() {
    this.lines = new SqliteGenericRepository<Line>(this.lineRepository);
  }
}