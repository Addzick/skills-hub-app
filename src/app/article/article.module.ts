// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Resolver
import { ArticleResolver } from './article-resolver.service';

// Article components
import { ArticleComponent } from './article.component';
import { ArticleCreateComponent } from './create/article-create.component';
import { ArticleDetailComponent } from './detail/article-detail.component';
import { ArticleEditComponent } from './edit/article-edit.component';

// Routing
import { routes } from './article.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    ArticleComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ],
  providers: [
    ArticleResolver
  ],
  exports: [
    ArticleComponent,
    ArticleCreateComponent,
    ArticleDetailComponent,
    ArticleEditComponent,
  ]
})
export class ArticleModule { }
