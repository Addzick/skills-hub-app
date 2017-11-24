// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Account components
import { AccountComponent } from './account/account.component';

// Routing
import { routes } from './account.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    AccountComponent,
  ],
  providers: [
  ],
  exports: [
    AccountComponent,
  ]
})
export class AccountModule { }
