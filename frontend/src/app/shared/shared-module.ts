import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Button } from './components/button/button';
import { Card } from './components/card/card';
import { Dialog } from './components/dialog/dialog';
import { FormField } from './components/form-field/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, Button, Card, Dialog, FormsModule, ReactiveFormsModule],
  declarations: [FormField],
  exports: [Button, Card, Dialog, FormField, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
