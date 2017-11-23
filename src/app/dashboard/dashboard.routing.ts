// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Wall components
import { DashboardComponent } from './dashboard/dashboard.component';

// Routes definition
export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
    },
];
