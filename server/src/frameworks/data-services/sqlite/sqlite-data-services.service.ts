import { INestApplication, Injectable, OnApplicationBootstrap, OnModuleInit } from '@nestjs/common';
import { PrismaClient, Line, Machine } from '@prisma/client';
import { IDataServices } from 'src/core/abstracts';
import { SqliteGenericRepository } from './sqlite-generic-repository';

@Injectable()
export class SqliteDataServices extends PrismaClient implements IDataServices, OnModuleInit, OnApplicationBootstrap {

  lines: SqliteGenericRepository<Line>;
  machines: SqliteGenericRepository<Machine>;

  async onModuleInit() {
    await this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  async onApplicationBootstrap() {
    this.lines = new SqliteGenericRepository<Line>(this.line);
    this.machines = new SqliteGenericRepository<Machine>(this.machine);
  }
}