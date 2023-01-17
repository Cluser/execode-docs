import { Line } from 'src/core/entities';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract lines: IGenericRepository<Line>;
}