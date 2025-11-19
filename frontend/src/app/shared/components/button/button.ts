import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.scss',
  standalone: true,
})
export class Button {
  @Input({ required: true }) label: string = '';
  @Input() appearance: 'outline' | 'danger' | 'primary' = 'primary';
  @Input() disabled: boolean = false;

  @Output() click: EventEmitter<void> = new EventEmitter();
}
