// Angular modules
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

// Http components
import { Http, XHRBackend, RequestOptions } from '@angular/http';

// Core services
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuardLogin } from './auth-guard-login.service';

// Core factories
import { httpFactory } from './http.factory';

@NgModule({
  imports: [],
  declarations: [],
  exports: [],
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
