import { Injectable } from '@angular/core';
import { GenericState } from '../../../shared/classes/generic-state';
import { PhotographerModel } from '../models/photographer-model';

@Injectable({
  providedIn: 'root',
})
export class PhotographerState extends GenericState<PhotographerModel> {}
