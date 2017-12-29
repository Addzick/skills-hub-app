// Angular stuff
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Dashboard components
import { DashboardComponent } from './dashboard.component';

// Routing
import { routes } from './dashboard.routing';
import { PublicationsComponent } from './publications/publications.component';
import { TodolistComponent } from './todolist/todolist.component';
import { PlanningComponent } from './planning/planning.component';
import { NotificationsComponent } from './notifications/notifications.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
    PublicationsComponent,
    TodolistComponent,
    PlanningComponent,
    NotificationsComponent,
  ],
  providers: [
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
