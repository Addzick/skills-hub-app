//  Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// 3rd parties
import { MomentModule } from 'angular2-moment';

// Shared controls
import { ExtendInput } from './extend-input/extend-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
  ],
  declarations: [
    ExtendInput,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    ExtendInput,
  ]
})
export class SharedModule { }
