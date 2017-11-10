// Angular modules
import { NgModule, ModuleWithProviders } from '@angular/core';

// Http components
import { Http, XHRBackend, RequestOptions } from '@angular/http';

// Core services
import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { AuthGuardLogin } from './auth-guard-login.service';

// Core factories
import { httpFactory } from './http.factory';

// Environment variables
import { environment } from '../../environments/environment';
// Socket IO
import { SocketIoModule, SocketIoConfig } from 'ng-socket-io';
// Socket IO configuration
const config: SocketIoConfig = { url: environment.socketUrl, options: {} };

@NgModule({
  imports: [
    SocketIoModule.forRoot(config),
  ],
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
