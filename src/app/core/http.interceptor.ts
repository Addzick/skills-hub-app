// Angular modules
import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers, URLSearchParams } from '@angular/http';
import { Router } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Environment variables
import { AuthService } from './auth.service';

@Injectable()
export class HttpInterceptor extends Http {

  // Class contruction
  constructor(
    backend: XHRBackend, 
    options: RequestOptions,
    private router: Router,
    private auth: AuthService) {
    super(backend, options);
  }

  // Intercepts request sending and catch all errrors
  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    // Send the request
    return super.request(url, options).catch(this.handleError);
  }

  // Intercepts a GET request
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.get(url, this.getRequestOptionArgs(options));
  }

  // Intercepts a POST request
  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.post(url, JSON.stringify(body) , this.getRequestOptionArgs(options));
  }

  // Intercepts a PUT request
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.put(url, JSON.stringify(body), this.getRequestOptionArgs(options));
  }

  // Intercepts a PATCH request
  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.patch(url, JSON.stringify(body), this.getRequestOptionArgs(options));
  }

  // Intercepts a DELETE request
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  // Defines request options arguments
  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    // Create request options and header objects
    if (options == null) { options = new RequestOptions(); }
    if (options.headers == null) { options.headers = new Headers(); }

    // Set request content type
    options.headers.set('Content-type', 'application/json;charset=UTF-8');
    // Define authorization token
    const token = localStorage.getItem('token');
    if (token) { options.headers.set('Authorization', `Bearer ${token}`); }
    // Returns completed options
    return options;
  }

  // Handles response errors
  private handleError = (error: Response) => {
     
    switch(error.status){
      // Erreur interne au serveur
      case 500 : {
        this.router.navigate(['/error', '500']);
        return Observable.empty();
      }
      // Utilisateur non authentifié
      case 401: {
        this.auth.deleteCurrentUser();
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: this.router.url } });
        return Observable.empty();
      }
      // Action non autorisée
      case 403 : {
        this.router.navigate(['/error', '403']);
        return Observable.empty();
      }
      default : 
        // On renvoie l'erreur dans tous les autres cas
        return Observable.throw(error);
    }
  }
}
