// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/services/auth-guard-login.service';

// Article components
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticleEditComponent } from './article-edit/article-edit.component';

export const routes: Routes = [
  {
    path: '',
    component: ArticleListComponent,
  },
  {
    path: ':article',
    component: ArticleDetailComponent,
  },
];
