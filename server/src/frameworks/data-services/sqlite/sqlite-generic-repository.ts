import { IGenericRepository } from 'src/core/abstracts';
import { Repository } from 'typeorm';

export class SqliteGenericRepository<T> implements IGenericRepository<T> {
  private _repository: Repository<T>;

  constructor(repository: Repository<T>) {
    this._repository = repository;
  }

  getAll(): Promise<T[]> {
    return this._repository.find()
  }

  get(id: any): Promise<T> {
    return null
  }

  create(item: T): Promise<T> {
    return new Promise((resolve, reject) => {
      resolve(this._repository.create(item))
    })
  }

  update(id: string, item: T) {
    return null
  }
}