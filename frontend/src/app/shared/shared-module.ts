import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/button/button';

@NgModule({
  imports: [CommonModule, Button],
  exports: [Button],
})
export class SharedModule {}
