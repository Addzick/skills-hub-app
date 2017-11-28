// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Account components
import { AccountComponent } from './account/account.component';
import { InfosComponent } from './infos/infos.component';
import { JournalComponent } from './journal/journal.component';
import { EditComponent } from './edit/edit.component';
import { FavoritesComponent } from './favorites/favorites.component';

// Routing
import { routes } from './account.routing';
import { StatsComponent } from './stats/stats.component';


@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AccountComponent,
    InfosComponent,
    JournalComponent,
    EditComponent,
    FavoritesComponent,
    StatsComponent,
  ],
  providers: [
  ],
  exports: [
    AccountComponent,
    InfosComponent,
    JournalComponent,
    EditComponent,
    FavoritesComponent,
  ]
})
export class AccountModule { }
