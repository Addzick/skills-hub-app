// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Routing
import { routes } from './wall.routing';

// Wall components
import { WallComponent } from './wall.component';
import { EventsComponent } from './events/events.component';
import { UsersComponent } from './users/users.component';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WallComponent,
    EventsComponent,
    UsersComponent,
    NavigationComponent,
  ],
  providers: [
  ],
  exports: []
})
export class WallModule { }
