import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PhotographerRoutingModule } from './photographer-routing-module';
import { SharedModule } from '../../shared/shared-module';
import { PagePhotographersManagement } from './pages/page-photographers-management/page-photographers-management';

@NgModule({
  declarations: [PagePhotographersManagement],
  imports: [CommonModule, PhotographerRoutingModule, SharedModule],
})
export class PhotographerModule {}
