import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared-module';
import { FormPhotographer } from './components/form-photographer/form-photographer';
import { DlgPhotographer } from "./pages/dlg-photographer/dlg-photographer";
import { PagePhotographersManagement } from './pages/page-photographers-management/page-photographers-management';
import { PhotographerRoutingModule } from './photographer-routing-module';

@NgModule({
  declarations: [PagePhotographersManagement, DlgPhotographer, FormPhotographer],
  imports: [CommonModule, PhotographerRoutingModule, SharedModule],
})
export class PhotographerModule { }
