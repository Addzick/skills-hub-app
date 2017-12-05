// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Wall components
import { WallComponent } from './wall.component';

// Routing
import { routes } from './wall.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    WallComponent,
  ],
  providers: [
  ],
  exports: [
    WallComponent,
  ]
})
export class WallModule { }
