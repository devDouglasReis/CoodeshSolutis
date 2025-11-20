import { Component, OnInit } from '@angular/core';
import { PhotographerFacade } from '../../photographer-facade';

@Component({
  selector: 'app-page-photographers-management',
  templateUrl: './page-photographers-management.html',
  styleUrl: './page-photographers-management.scss',
  standalone: false,
})
export class PagePhotographersManagement implements OnInit {
  public isDialogPhotographerOpen: boolean = true;

  constructor(private facade: PhotographerFacade) {}

  ngOnInit(): void {
    this.facade.list();
  }

  openDialogPhotographer() {
    this.isDialogPhotographerOpen = true;
  }
}
