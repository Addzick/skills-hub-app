// Angular modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, XHRBackend, RequestOptions } from '@angular/http';
import { RouterModule } from '@angular/router';

// Core components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

// Core services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';
import { EventService } from './services/event.service';

// Core factories
import { httpFactory } from './http.factory';

// Core routing
import { routes } from './core-routing';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
  ],
  providers: []
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {
          provide: Http,
          useFactory: httpFactory,
          deps: [XHRBackend, RequestOptions]
        },
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        UserService,
        AuthService,
        AuthGuardLogin,
        EventService,
      ],
    };
  }
}
