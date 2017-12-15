// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Wall components
import { WallComponent } from './wall.component';
import { EventsComponent } from './events/events.component';
import { ArticlesComponent } from './articles/articles.component';
import { TendersComponent } from './tenders/tenders.component';

// Routing
import { routes } from './wall.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WallComponent,
    EventsComponent,
    ArticlesComponent,
    TendersComponent,
  ],
  providers: [
  ],
  exports: []
})
export class WallModule { }
