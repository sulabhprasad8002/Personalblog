import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  imports: [
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatToolbarModule,
    MatCardModule
  ]
})
export class MatModule { }
