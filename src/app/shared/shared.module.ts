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
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article/article-edit.component';

// Shared controls
import { ExtendInputComponent } from './extend-input/extend-input.component';
import { ArticleService } from './services/article.service';
import { ArticleResolver } from './services/article-resolver.service';

// Module initialization
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
    ArticleComponent,
    ArticleEditComponent,
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
    ArticleComponent,
    ArticleEditComponent,
  ],
  providers: [
    ArticleService,
    ArticleResolver
  ]
})
export class SharedModule { }
