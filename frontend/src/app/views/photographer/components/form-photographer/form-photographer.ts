import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-photographer',
  templateUrl: './form-photographer.html',
  styleUrl: './form-photographer.scss',
  standalone: false
})
export class FormPhotographer {

  public form;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: this.fb.nonNullable.control<string>(''),
      camera: this.fb.nonNullable.control<string>(''),
      lens: this.fb.nonNullable.control<string | undefined>(undefined)
    });
  }
}
