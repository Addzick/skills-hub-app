// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Portfolio components
import { PortfolioComponent } from './portfolio.component';

export const routes: Routes = [
    {
        path: '',
        component: PortfolioComponent,
    } 
]
