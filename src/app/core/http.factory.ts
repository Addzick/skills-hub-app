// Angular stuff
import { XHRBackend, Http, RequestOptions } from '@angular/http';
import { Router } from '@angular/router';

// Custom interceptor
import { HttpInterceptor } from './http.interceptor';

// Core services
import { AuthService } from './auth.service'

export function httpFactory(
    xhrBackend: XHRBackend, 
    requestOptions: RequestOptions,
    router: Router,
    auth: AuthService): Http {
    return new HttpInterceptor(xhrBackend, requestOptions, router, auth);
}
