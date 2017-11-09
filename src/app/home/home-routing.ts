// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Home module components
import { HomeComponent } from './home.component';
import { SignComponent } from './sign/sign.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'sign',
    component: SignComponent,
  }
];
