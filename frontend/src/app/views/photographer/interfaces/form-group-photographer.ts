import { FormControl, FormGroup } from '@angular/forms';

export type FormGroupPhotographer = FormGroup<{
  name: FormControl<string>;
  camera: FormControl<string>;
  lens: FormControl<string | undefined>;
}>;

export interface FormGroupPhotographerValue {
  name: string;
  camera: string;
  lens: string | undefined;
}
