//  Angular stuff
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 3rd parties
import { MomentModule } from 'angular2-moment';

// Shared components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

// Shared controls
import { ExtendInputComponent } from './extend-input/extend-input.component';
import { LayoutService } from './layout.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    RouterModule,
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MomentModule,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    ExtendInputComponent,
  ],
  providers: [LayoutService]
})
export class SharedModule { }
