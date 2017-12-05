// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Account components
import { AccountComponent } from './account.component';
import { SignComponent } from './sign/sign.component';

// Routes definition
export const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        canActivate: [AuthGuardLogin],
    },
    {
        path: 'sign',
        component: SignComponent,
    },
];
