// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';
// Resolver
import { PropositionResolver } from './proposition-resolver.service';

// Proposition components
import { PropositionComponent } from './proposition.component';
import { PropositionCreateComponent } from './create/proposition-create.component';
import { PropositionDetailComponent } from './detail/proposition-detail.component';
import { PropositionEditComponent } from './edit/proposition-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: PropositionComponent,
        children: [
            {
                path: 'create',
                component: PropositionCreateComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':proposition/detail',
                resolve: { proposition: PropositionResolver },
                component: PropositionDetailComponent,
            },
            {
                path: ':proposition/edit',
                resolve: { proposition: PropositionResolver },
                component: PropositionEditComponent,
                canActivate: [AuthGuardLogin]
            }
        ]
    }
]
