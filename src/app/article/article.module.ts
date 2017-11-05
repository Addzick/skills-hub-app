import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleService } from './article.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ArticleDetailComponent, ArticleListComponent, ArticleEditComponent],
  providers: [ArticleService]
})
export class ArticleModule { }
