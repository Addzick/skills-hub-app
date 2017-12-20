// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';
// Resolver
import { ArticleResolver } from './article-resolver.service';

// Article components
import { ArticleComponent } from './article.component';
import { ArticleCreateComponent } from './create/article-create.component';
import { ArticleDetailComponent } from './detail/article-detail.component';
import { ArticleEditComponent } from './edit/article-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        children: [
            {
                path: 'create',
                component: ArticleCreateComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':article/detail',
                component: ArticleDetailComponent,
            },
            {
                path: ':article/edit',
                component: ArticleEditComponent,
                canActivate: [AuthGuardLogin],
                resolve: { article: ArticleResolver }
            }
        ]
    }
]
