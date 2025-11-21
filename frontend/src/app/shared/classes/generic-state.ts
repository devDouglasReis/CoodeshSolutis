import { BehaviorSubject, Observable } from 'rxjs';

export abstract class GenericState<T> {
  private readonly _data = new BehaviorSubject<T[]>([]);
  private readonly _selected = new BehaviorSubject<T | null>(null);

  public list(): Observable<T[]> {
    return this._data.asObservable();
  }

  public selected(): Observable<T | null> {
    return this._selected.asObservable();
  }

  public add(data: T | T[]): void {
    if (Array.isArray(data)) {
      this._data.next([...this._data.value, ...data]);
    } else {
      this._data.next([...this._data.value, data]);
    }
  }

  public clear(): void {
    this._data.next([]);
  }

  public update(id: any, key: keyof T, data: T): void {
    this._data.next(this._data.value.map((item) => (item[key] === id ? data : item)));
  }

  public remove(id: any, key: keyof T): void {
    this._data.next(this._data.value.filter((item) => item[key] !== id));
  }

  public select(id: any, key: keyof T): void {
    this._selected.next(this._data.value.find((item) => item[key] === id) ?? null);
  }

  public unselect(): void {
    this._selected.next(null);
  }
}
