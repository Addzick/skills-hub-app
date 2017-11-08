// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/services/auth-guard-login.service';

// Home module components
import { HomeComponent } from './home.component';
import { SignComponent } from './sign/sign.component';
import { LogoutComponent } from './logout/logout.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'register',
        component: SignComponent,
        data: {
          activeTab: 'ms-register-tab'
        }
      },
      {
        path: 'login',
        component: SignComponent,
        data: {
          activeTab: 'ms-login-tab'
        }
      },
      {
        path: 'forgot',
        component: SignComponent,
        data: {
          activeTab: 'ms-recovery-tab'
        }
      },
    ]
  },
];
