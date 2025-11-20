import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroupPhotographerValue } from '../../interfaces/form-group-photographer';

@Component({
  selector: 'app-dlg-photographer',
  templateUrl: './dlg-photographer.html',
  styleUrl: './dlg-photographer.scss',
  standalone: false,
})
export class DlgPhotographer {
  public formPhotographerValue: FormGroupPhotographerValue | undefined;

  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();

  addPhotographer() {

    

    this.onConfirm.emit();
  }
}
