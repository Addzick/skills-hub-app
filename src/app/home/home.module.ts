// Angular stuff
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Module components
import { HomeComponent } from './home.component';
import { SignComponent } from './sign/sign.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Routing
import { routes } from './home-routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    SignComponent,
    LoginComponent,
    RegisterComponent,
  ],
  exports: [
    HomeComponent,
    SignComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class HomeModule { }

