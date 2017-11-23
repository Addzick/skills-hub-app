// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Resolvers
import { ArticleResolver } from './resolvers/article-resolver.service';
import { CategoryResolver } from './resolvers/category-resolver.service';
import { PropositionResolver } from './resolvers/proposition-resolver.service';
import { RatingResolver } from './resolvers/rating-resolver.service';
import { TaskResolver } from './resolvers/task-resolver.service';
import { TenderResolver } from './resolvers/tender-resolver.service';
import { EventResolver } from './resolvers/event-resolver.service';

// Detail Components
import { ArticleComponent } from './article/article.component';
import { PropositionComponent } from './proposition/proposition.component';
import { RatingComponent } from './rating/rating.component';
import { TaskComponent } from './task/task.component';
import { TenderComponent } from './tender/tender.component';
import { EventComponent } from './event/event.component';

// Edit components
import { ArticleEditComponent } from './article/article-edit.component';

export const routes: Routes = [
    {
        path: ':article',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    },
    {
        path: ':proposition',
        component: PropositionComponent,
        resolve: {
            article: PropositionResolver
        }
    },
    {
        path: ':rating',
        component: RatingComponent,
        resolve: {
            article: RatingResolver
        }
    },
    {
        path: ':task',
        component: TaskComponent,
        resolve: {
            article: TaskResolver
        }
    },
    {
        path: ':tender',
        component: TenderComponent,
        resolve: {
            article: TenderResolver
        }
    },
    {
        path: ':event',
        component: EventComponent,
        resolve: {
            article: EventResolver
        }
    },
];
