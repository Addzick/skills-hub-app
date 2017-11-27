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
import { ArticleComponent } from './components/article/article.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { RatingComponent } from './components/rating/rating.component';
import { TaskComponent } from './components/task/task.component';
import { TenderComponent } from './components/tender/tender.component';
import { EventComponent } from './components/event/event.component';

// Edit components
import { ArticleEditComponent } from './components/article/article-edit.component';

export const routes: Routes = [
    {
        path: ':article',
        resolve: {
            article: ArticleResolver
        }
    },
    {
        path: ':proposition',
        resolve: {
            article: PropositionResolver
        }
    },
    {
        path: ':rating',
        resolve: {
            article: RatingResolver
        }
    },
    {
        path: ':task',
        resolve: {
            article: TaskResolver
        }
    },
    {
        path: ':tender',
        resolve: {
            article: TenderResolver
        }
    },
    {
        path: ':event',
        resolve: {
            article: EventResolver
        }
    },
];
