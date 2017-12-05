// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Account components
import { AccountComponent } from './account.component';
import { SignComponent } from './sign/sign.component';

import { InfosComponent } from './infos/infos.component';
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
    SignComponent,
    FavoritesComponent,
    StatsComponent,
  ],
  providers: [
  ],
  exports: [
    AccountComponent,
    InfosComponent,
    SignComponent,
    JournalComponent,
    FavoritesComponent,
    StatsComponent,
  ]
})
export class AccountModule { }
