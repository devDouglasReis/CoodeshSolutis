import { Component, Input, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  templateUrl: './form-field.html',
  styleUrls: ['./form-field.scss'],
  standalone: false,
})
export class FormField implements OnInit {
  @Input({ required: true }) control!: FormControl;
  @Input() label: string = '';
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() id: string = '';

  public isRequired: boolean = false;

  ngOnInit(): void {
    this.isRequired = this.control.hasValidator(Validators.required);
  }
}
