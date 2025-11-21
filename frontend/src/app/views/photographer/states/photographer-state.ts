import { Injectable } from '@angular/core';
import { GenericState } from '../../../shared/classes/generic-state';
import { PhotographerModel } from '../models/photographer-model';

@Injectable({
  providedIn: 'root',
})
export class PhotographerState extends GenericState<PhotographerModel> {
  constructor() {
    super();
  }

  override select(id: number | null) {
    super.select(id, 'id');
  }
}
