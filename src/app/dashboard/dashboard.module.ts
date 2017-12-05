// Angular stuff
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Dashboard components
import { DashboardComponent } from './dashboard.component';

// Routing
import { routes } from './dashboard.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    DashboardComponent,
  ],
  providers: [
  ],
  exports: [
    DashboardComponent,
  ]
})
export class DashboardModule { }
