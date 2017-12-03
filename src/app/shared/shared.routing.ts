// Angular modules
import { Routes } from '@angular/router';

// Resolvers
import { ArticleResolver } from './resolvers/article-resolver.service';
import { CategoryResolver } from './resolvers/category-resolver.service';
import { PropositionResolver } from './resolvers/proposition-resolver.service';
import { RatingResolver } from './resolvers/rating-resolver.service';
import { TaskResolver } from './resolvers/task-resolver.service';
import { TenderResolver } from './resolvers/tender-resolver.service';
import { EventResolver } from './resolvers/event-resolver.service';

// Components
import { ArticleComponent } from './components/article/article.component';
import { PropositionComponent } from './components/proposition/proposition.component';
import { RatingComponent } from './components/rating/rating.component';
import { TaskComponent } from './components/task/task.component';
import { TenderComponent } from './components/tender/tender.component';
import { EventComponent } from './components/event/event.component';

export const routes: Routes = [
    {
        path: ':article',
        resolve: {
            article: ArticleResolver
        }
    },
    {
        path: ':event',
        resolve: {
            event: EventResolver
        }
    },
    {
        path: ':proposition',
        resolve: {
            proposition: PropositionResolver
        }
    },
    {
        path: ':rating',
        resolve: {
            rating: RatingResolver
        }
    },
    {
        path: ':task',
        resolve: {
            task: TaskResolver
        }
    },
    {
        path: ':tender',
        resolve: {
            tender: TenderResolver
        }
    },
    
];
