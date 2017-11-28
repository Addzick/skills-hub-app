// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Account components
import { AccountComponent } from './account/account.component';
import { InfosComponent } from './infos/infos.component';
import { AddressComponent } from './address/address.component';
import { JournalComponent } from './journal/journal.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { StatsComponent } from './stats/stats.component';

// Routing
import { routes } from './account.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AccountComponent,
    InfosComponent,
    JournalComponent,
    AddressComponent,
    FavoritesComponent,
    StatsComponent,
  ],
  providers: [
  ],
  exports: [
    AccountComponent,
    InfosComponent,
    AddressComponent,
    JournalComponent,
    FavoritesComponent,
    StatsComponent,
  ]
})
export class AccountModule { }
