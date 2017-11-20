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
import { ForgotComponent } from './forgot/forgot.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

// Routing
import { routes } from './home-routing';

// Module instanciation
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
    ForgotComponent,
    AboutComponent,
    ContactComponent,
  ],
  exports: [
    HomeComponent,
    SignComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AboutComponent,
    ContactComponent,
  ]
})
export class HomeModule { }

