import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-dlg-photographer',
  templateUrl: './dlg-photographer.html',
  styleUrl: './dlg-photographer.scss',
  standalone: false
})
export class DlgPhotographer {
  @Output() onClose: EventEmitter<void> = new EventEmitter();
}
