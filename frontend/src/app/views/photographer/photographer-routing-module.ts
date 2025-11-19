import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagePhotographersManagement } from './pages/page-photographers-management/page-photographers-management';

const routes: Routes = [
  { path: '', redirectTo: 'photographers', pathMatch: 'full' },
  { path: 'photographers', component: PagePhotographersManagement}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PhotographerRoutingModule {}
