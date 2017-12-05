// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Wall components
import { WallComponent } from './wall.component';

// Shared Resolvers
import { ArticleResolver } from '../shared/resolvers/article-resolver.service';
import { CategoryResolver } from '../shared/resolvers/category-resolver.service';
import { PropositionResolver } from '../shared/resolvers/proposition-resolver.service';
import { RatingResolver } from '../shared/resolvers/rating-resolver.service';
import { TaskResolver } from '../shared/resolvers/task-resolver.service';
import { TenderResolver } from '../shared/resolvers/tender-resolver.service';
import { EventResolver } from '../shared/resolvers/event-resolver.service';
import { CommentResolver } from '../shared/resolvers/comment-resolver.service';
import { LikeResolver } from '../shared/resolvers/like-resolver.service';
import { UserResolver } from '../shared/resolvers/user-resolver.service';

// Shared Components
import { ArticleDetailComponent } from '../shared/components/article/article-detail.component';
import { CommentDetailComponent } from '../shared/components/comment/comment-detail.component';
import { EventDetailComponent } from '../shared/components/event/event-detail.component';
import { LikeDetailComponent } from '../shared/components/like/like-detail.component';
import { PropositionDetailComponent } from '../shared/components/proposition/proposition-detail.component';
import { RatingDetailComponent } from '../shared/components/rating/rating-detail.component';
import { TaskDetailComponent } from '../shared/components/task/task-detail.component';
import { TenderDetailComponent } from '../shared/components/tender/tender-detail.component';
import { UserDetailComponent } from '../shared/components/user/user-detail.component';

export const routes: Routes = [
    {
        path: '',
        component: WallComponent,
    },
    {
        path: 'article/:article',
        component: ArticleDetailComponent,
        resolve: {
            article: ArticleResolver
        }
    },
    {
        path: 'event/:event',
        component: EventDetailComponent,
        resolve: {
            event: EventResolver
        }
    },
    {
        path: 'proposition/:proposition',
        component: PropositionDetailComponent,
        resolve: {
            proposition: PropositionResolver
        }
    },
    {
        path: 'rating/:rating',
        component: RatingDetailComponent,
        resolve: {
            rating: RatingResolver
        }
    },
    {
        path: 'task/:task',
        component: TaskDetailComponent,
        resolve: {
            task: TaskResolver
        }
    },
    {
        path: 'tender/:tender',
        component: TenderDetailComponent,
        resolve: {
            tender: TenderResolver
        }
    },
    {
        path: 'comment/:comment',
        component: CommentDetailComponent,
        resolve: {
            comment: CommentResolver
        }
    },
    {
        path: 'like/:like',
        component: LikeDetailComponent,
        resolve: {
            like: LikeResolver
        }
    }, 
    {
        path: 'user/:user',
        component: UserDetailComponent,
        resolve: {
            user: UserResolver
        }
    }, 
]
