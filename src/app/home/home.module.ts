import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';

// Core services
import { AuthGuardLogin } from '../core/services/auth-guard-login.service';

// Skills-hib modules
import { SharedModule } from '../shared/shared.module';

// Module components
import { HomeComponent } from './home.component';
import { routes } from './home-routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }

