import { IGenericRepository } from 'src/core/abstracts';

export class SqliteGenericRepository<T> implements IGenericRepository<T> {
  private _repository: any;

  constructor(private repository: any) {
    this._repository = repository
  }

  async getAll(): Promise<any> {
    return this._repository.findMany();
  }

  async get(id: any): Promise<any> {
    return this._repository.findUnique({
      where: { id: Number(id) },
    });
  }

  async create(item: any): Promise<any> {
    return this._repository.create({data: item})
  }

  async update(id: number, item: any): Promise<any> {
    return this._repository.update({
      where: { id: Number(id) },
      data: item
    });
  }

  async delete(id: number): Promise<any> {
    return this._repository.delete({
      where: { id: Number(id) },
    });
  }
}