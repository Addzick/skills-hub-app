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
import { RatingsComponent } from './ratings/ratings.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { TendersComponent } from './tenders/tenders.component';
import { ArticlesComponent } from './articles/articles.component';

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
    RatingsComponent,
    PropositionsComponent,
    TendersComponent,
    ArticlesComponent,
  ],
  exports: [
    HomeComponent,
    SignComponent,
    LoginComponent,
    RegisterComponent,
    ForgotComponent,
    AboutComponent,
    ContactComponent,
    RatingsComponent,
    PropositionsComponent,
    TendersComponent,
    ArticlesComponent,
  ]
})
export class HomeModule { }

