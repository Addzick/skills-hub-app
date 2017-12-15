// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Account resolver
import { AccountResolver } from './account-resolver.service';

// Account components
import { AccountComponent } from './account.component';
import { AccountLoginComponent } from './login/login.component';
import { AccountRegisterComponent } from './register/register.component';
import { AccountForgotComponent } from './forgot/forgot.component';
import { AccountInfosComponent } from './infos/infos.component';
import { AccountAddressComponent } from './address/address.component';
import { AccountFavoritesComponent } from './favorites/favorites.component';
import { AccountJournalComponent } from './journal/journal.component';
import { AccountStatsComponent } from './stats/stats.component';
import { AccountProfileComponent } from './profile/profile.component';
import { AccountDetailComponent } from './detail/detail.component';

// Routing
import { routes } from './account.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AccountComponent,
    AccountInfosComponent,
    AccountAddressComponent,
    AccountJournalComponent,
    AccountLoginComponent,
    AccountRegisterComponent,
    AccountForgotComponent,
    AccountFavoritesComponent,
    AccountStatsComponent,
    AccountProfileComponent,
    AccountDetailComponent,
  ],
  providers: [
    AccountResolver,
  ],
  exports: []
})
export class AccountModule { }
