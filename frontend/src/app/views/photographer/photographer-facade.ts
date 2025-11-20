import { Injectable } from '@angular/core';
import { PhotographerApi } from '../../shared/api/photographer-api';
import { CreatePhotographerInput } from '../../shared/api/models/create-photographer-input';
import { ListPhotographerOutput } from '../../shared/api/models/list-photographer-output';
import { UpdatePhotographerInput } from '../../shared/api/models/update-photographer-input';
import { PhotographerState } from './states/photographer-state';
import { firstValueFrom, Observable } from 'rxjs';
import { PhotographerModel } from './models/photographer-model';

@Injectable({
  providedIn: 'root',
})
export class PhotographerFacade {
  public photographers$: Observable<ListPhotographerOutput[]>;
  public selectedPhotographer$: Observable<PhotographerModel | null>;

  constructor(
    private photographerApi: PhotographerApi,
    private photographerState: PhotographerState
  ) {
    this.photographers$ = this.photographerState.list();
    this.selectedPhotographer$ = this.photographerState.selected();
  }

  async create(input: CreatePhotographerInput) {
    try {
      const value = await firstValueFrom(this.photographerApi.create(input));
      this.photographerState.add(value);
    } catch (error) {
      console.error(error);
    }
  }

  async update(id: number, input: UpdatePhotographerInput) {
    try {
      const value = await firstValueFrom(this.photographerApi.update(id, input));
      this.photographerState.update(id, 'id', value);
    } catch (error) {
      console.error(error);
    }
  }

  async delete(id: number): Promise<void> {
    try {
      await firstValueFrom(this.photographerApi.delete(id));
      this.photographerState.remove(id, 'id');
    } catch (error) {
      console.error(error);
    }
  }

  async list(): Promise<void> {
    try {
      const value = await firstValueFrom(this.photographerApi.list());
      this.photographerState.add(value);
    } catch (error) {
      console.error(error);
    }
  }
}
