// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Routing
import { routes } from './article.routing';

// Article components
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleResolver } from './article-resolver.service';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ],
  providers: [
    ArticleResolver,
  ],
  exports: [
    ArticleListComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ]
})
export class ArticleModule { }
