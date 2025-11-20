import { Injectable } from '@angular/core';
import { PhotographerApi } from '../../shared/api/photographer-api';
import { CreatePhotographerInput } from '../../shared/api/models/create-photographer-input';
import { ListPhotographerOutput } from '../../shared/api/models/list-photographer-output';
import { UpdatePhotographerInput } from '../../shared/api/models/update-photographer-input';
import { PhotographerState } from './states/photographer-state';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PhotographerFacade {
  public photographers$: Observable<ListPhotographerOutput[]>;

  constructor(
    private photographerApi: PhotographerApi,
    private photographerState: PhotographerState
  ) {
    this.photographers$ = this.photographerState.list();
  }

  create(input: CreatePhotographerInput) {
    this.photographerApi.create(input).subscribe({
      next: (value) => {
        this.photographerState.add(value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  update(id: number, input: UpdatePhotographerInput) {
    this.photographerApi.update(id, input).subscribe({
      next: (value) => {
        this.photographerState.update(id, 'id', value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  delete(id: number): void {
    this.photographerApi.delete(id).subscribe({
      next: () => {
        this.photographerState.remove(id, 'id');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }

  list(): void {
    this.photographerApi.list().subscribe({
      next: (value) => {
        this.photographerState.add(value);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
