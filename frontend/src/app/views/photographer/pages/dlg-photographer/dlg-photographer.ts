import { Component, DestroyRef, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroupPhotographerValue } from '../../interfaces/form-group-photographer';
import { PhotographerFacade } from '../../photographer-facade';
import { PhotographerModel } from '../../models/photographer-model';
import { filter, pipe } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-dlg-photographer',
  templateUrl: './dlg-photographer.html',
  styleUrl: './dlg-photographer.scss',
  standalone: false,
})
export class DlgPhotographer implements OnInit {
  public formPhotographerValue: FormGroupPhotographerValue | undefined;
  private selectedPhotographer: PhotographerModel | null = null;
  public title: string = '';
  constructor(private facade: PhotographerFacade, private destroyRef: DestroyRef) {}

  @Input() dialogMode: 'add' | 'edit' = 'add';

  @Output() onClose: EventEmitter<void> = new EventEmitter();
  @Output() onCancel: EventEmitter<void> = new EventEmitter();
  @Output() onConfirm: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
    if (this.dialogMode === 'edit') {
      this.facade.selectedPhotographer$
        .pipe(takeUntilDestroyed(this.destroyRef))
        .subscribe((photographer) => {
          this.selectedPhotographer = photographer;
          if (!photographer) return;

          this.formPhotographerValue = {
            name: photographer.name,
            camera: photographer.camera,
            lens: photographer.lens,
          };
        });
    }

    this.title = this.dialogMode === 'add' ? 'Adicionar fotografo(a)' : 'Editar fotografo(a)';
  }

  async addPhotographer() {
    if (!this.formPhotographerValue) {
      return;
    }

    try {
      await this.facade.create(this.formPhotographerValue);
    } catch (error) {
      console.error(error);
      return;
    }

    this.onConfirm.emit();
  }

  async updatePhotographer() {
    if (!this.formPhotographerValue || !this.selectedPhotographer) {
      return;
    }

    try {
      await this.facade.update(this.selectedPhotographer.id, this.formPhotographerValue);
    } catch (error) {
      console.error(error);
      return;
    }

    this.onConfirm.emit();
  }
}
