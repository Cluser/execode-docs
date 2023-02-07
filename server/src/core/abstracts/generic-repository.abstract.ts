export abstract class IGenericRepository<T> {
    abstract getAll(params?: object): Promise<T[]>;
    abstract get(id: number, params?: object): Promise<T>;
    abstract create(item: T, params?: object): Promise<T>;
    abstract update(id: number, item: Partial<T>, params?: object);
    abstract delete(id: number, params?: object): Promise<T>;
  }