import { Component, DestroyRef, OnInit } from '@angular/core';
import { PhotographerFacade } from '../../photographer-facade';
import { PhotographerModel } from '../../models/photographer-model';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-page-photographers-management',
  templateUrl: './page-photographers-management.html',
  styleUrl: './page-photographers-management.scss',
  standalone: false,
})
export class PagePhotographersManagement implements OnInit {
  public isDialogPhotographerOpen: boolean = false;
  public selectedPhotographer: PhotographerModel | null = null;

  constructor(public facade: PhotographerFacade, private destroyRef: DestroyRef) {}

  ngOnInit(): void {
    this.facade.list();

    this.facade.selectedPhotographer$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((photographer) => {
        this.selectedPhotographer = photographer;
      });
  }

  openDialogPhotographer() {
    this.isDialogPhotographerOpen = true;
  }

  closeDialogPhotographer() {
    this.isDialogPhotographerOpen = false;
    this.facade.selectPhotographer(null);
  }

  deletePhotographer(id: number) {
    this.facade.delete(id);
  }

  editPhotographer(id: number) {
    this.facade.selectPhotographer(id);
    this.isDialogPhotographerOpen = true;
  }
}
