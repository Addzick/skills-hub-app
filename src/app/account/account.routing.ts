// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';

// Account resolver
import { AccountResolver } from './account-resolver.service';

// Account components
import { AccountComponent } from './account.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountRegisterComponent } from './register/register.component';
import { AccountForgotComponent } from './forgot/forgot.component';
import { AccountDetailComponent } from './detail/detail.component';
import { AccountInfosComponent } from './infos/infos.component';
import { AccountAddressComponent } from './address/address.component';
import { AccountJournalComponent } from './journal/journal.component';
import { AccountFavoritesComponent } from './favorites/favorites.component';
import { AccountStatsComponent } from './stats/stats.component';
import { AccountProfileComponent } from './profile/profile.component';

// Routes definition
export const routes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'login',
                component: AccountLoginComponent,
            },
            {
                path: 'register',
                component: AccountRegisterComponent,
            },
            {
                path: 'forgot',
                component: AccountForgotComponent,
            },
            {
                path: 'profile',
                component: AccountProfileComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':account/detail',
                component: AccountDetailComponent,
                resolve: { account: AccountResolver },
            }
        ]
    },
    
];
