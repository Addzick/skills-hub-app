// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Shared components
import { ArticleComponent } from '../shared/article/article.component';
import { ArticleEditComponent } from '../shared/article/article-edit.component';
import { ArticleResolver } from '../shared/services/article-resolver.service';

// Wall components
import { DashboardComponent } from './dashboard/dashboard.component';

// Routes definition
export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
    {
        path: ':article',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    },
];
