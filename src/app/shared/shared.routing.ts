// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Article components
import { ArticleComponent } from './article/article.component';
import { ArticleEditComponent } from './article/article-edit.component';
import { ArticleResolver } from './services/article-resolver.service';

export const routes: Routes = [
    {
        path: ':article',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    },
];
