// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';
// Resolver
import { RatingResolver } from './rating-resolver.service';

// Rating components
import { RatingComponent } from './rating.component';
import { RatingCreateComponent } from './create/rating-create.component';
import { RatingDetailComponent } from './detail/rating-detail.component';
import { RatingEditComponent } from './edit/rating-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: RatingComponent,
        children: [
            {
                path: 'create',
                component: RatingCreateComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':rating/detail',
                resolve: { rating: RatingResolver },
                component: RatingDetailComponent,
            },
            {
                path: ':rating/edit',
                resolve: { rating: RatingResolver },
                component: RatingEditComponent,
                canActivate: [AuthGuardLogin]
            },
        ]
    }
]
