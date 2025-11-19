import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Button } from './components/button/button';
import { Card } from './components/card/card';
import { Dialog } from './components/dialog/dialog';
import { FormField } from './components/form-field/form-field';

@NgModule({
  imports: [CommonModule, Button, Card, Dialog, FormField],
  exports: [Button, Card, Dialog, FormField],
})
export class SharedModule { }
