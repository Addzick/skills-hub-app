//  Angular modules
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ExtendInput } from './extend-input/extend-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ExtendInput,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExtendInput,
  ]
})
export class SharedModule { }
