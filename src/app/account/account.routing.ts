// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Account components
import { AccountComponent } from './account/account.component';
import { EditComponent } from './edit/edit.component';

// Routes definition
export const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
    },
    {
        path: 'edit',
        component: EditComponent,
    }
];
