// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';
// Resolver
import { TenderResolver } from './tender-resolver.service';

// Tender components
import { TenderComponent } from './tender.component';
import { TenderCreateComponent } from './create/tender-create.component';
import { TenderDetailComponent } from './detail/tender-detail.component';
import { TenderEditComponent } from './edit/tender-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: TenderComponent,
        children: [
            {
                path: 'create',
                component: TenderCreateComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':tender/detail',
                resolve: { tender: TenderResolver },
                component: TenderDetailComponent,
            },
            {
                path: ':tender/edit',
                resolve: { tender: TenderResolver },
                component: TenderEditComponent,
                canActivate: [AuthGuardLogin]
            },
        ]
    }
]
