// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Article components
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';
import { ArticleResolver } from './article-resolver.service';

export const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: ':article',
    component: ArticleDetailComponent,
    resolve: {
      article: ArticleResolver
    }
  },
];
