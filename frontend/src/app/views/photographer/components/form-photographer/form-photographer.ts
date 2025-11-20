import { Component, DestroyRef, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {
  FormGroupPhotographer,
  FormGroupPhotographerValue,
} from '../../interfaces/form-group-photographer';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-form-photographer',
  templateUrl: './form-photographer.html',
  styleUrl: './form-photographer.scss',
  standalone: false,
})
export class FormPhotographer implements OnInit {
  public form: FormGroupPhotographer;

  @Output() formValue: EventEmitter<FormGroupPhotographerValue> =
    new EventEmitter<FormGroupPhotographerValue>();

  constructor(private fb: FormBuilder, private destroyRef: DestroyRef) {
    this.form = this.fb.group({
      name: this.fb.nonNullable.control<string>('', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(100),
      ]),
      camera: this.fb.nonNullable.control<string>('', [Validators.required]),
      lens: this.fb.nonNullable.control<string | undefined>(undefined),
    });
  }

  ngOnInit(): void {
    this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((value) => {
      this.formValue.emit(value as FormGroupPhotographerValue);
    });
  }
}
