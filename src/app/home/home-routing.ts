// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/services/auth-guard-login.service';

// Home module components
import { HomeComponent } from './home.component';

export const routes: Routes = [
  {
      path: '',
      redirectTo: 'home',
      pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
];
