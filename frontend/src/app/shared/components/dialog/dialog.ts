import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Button } from '../button/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
  imports: [Button]
})
export class Dialog {
  @Input({ required: true }) title: string = '';

  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();
}
