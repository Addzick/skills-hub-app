// Angular modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Http components
import { Http, XHRBackend, RequestOptions } from '@angular/http';

// Core components
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';

// Core services
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthGuardLogin } from './services/auth-guard-login.service';

// Core factories
import { httpFactory } from './http.factory';

// Core routing

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    FooterComponent,
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
        UserService,
        AuthService,
        AuthGuardLogin,
      ],
    };
  }
}
