import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PhotographerModel } from '../../models/photographer-model';

@Component({
  selector: 'app-card-photographer',
  templateUrl: './card-photographer.html',
  styleUrl: './card-photographer.scss',
  standalone: false,
})
export class CardPhotographer {
  @Input({ required: true }) photographer!: PhotographerModel;

  @Output() editPhotographer = new EventEmitter<number>();
  @Output() deletePhotographer = new EventEmitter<number>();
}
