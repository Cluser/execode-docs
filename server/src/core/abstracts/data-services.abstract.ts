import { Line, Machine } from '@prisma/client';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract lines: IGenericRepository<Line>;
  abstract machines: IGenericRepository<Machine>;
}