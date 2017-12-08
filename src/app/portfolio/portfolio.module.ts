// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Portfolio components
import { PortfolioComponent } from './portfolio.component';

// Routing
import { routes } from './portfolio.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PortfolioComponent,
  ],
  providers: [
  ],
  exports: [
    PortfolioComponent,
  ]
})
export class PortfolioModule { }
