import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('../app/views/photographer/photographer-module').then(m => m.PhotographerModule)
  }
];
