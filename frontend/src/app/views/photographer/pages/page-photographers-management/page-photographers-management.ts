import { Component } from '@angular/core';

@Component({
  selector: 'app-page-photographers-management',
  templateUrl: './page-photographers-management.html',
  styleUrl: './page-photographers-management.scss',
  standalone: false,
})
export class PagePhotographersManagement {
  public isDialogPhotographerOpen: boolean = false;

  constructor() { }

  openDialogPhotographer() {
    this.isDialogPhotographerOpen = true;
  }
}
