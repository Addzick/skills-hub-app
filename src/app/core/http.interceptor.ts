// Angular modules
import { Injectable } from '@angular/core';
import { Http, XHRBackend, RequestOptions, Request, RequestOptionsArgs, Response, Headers } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export class HttpInterceptor extends Http {

  // Class contruction
  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
  }

  // Intercepts request sending and catch all errrors
  request(url: string|Request, options?: RequestOptionsArgs): Observable<Response> {
    // Send the request
    return super.request(url, options).catch(this.handleError);
  }

  // Intercepts a GET request
  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.get(url, this.getRequestOptionArgs(options));
  }

  // Intercepts a POST request
  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.post(url, JSON.stringify(body) , this.getRequestOptionArgs(options));
  }

  // Intercepts a PUT request
  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.put(url, JSON.stringify(body), this.getRequestOptionArgs(options));
  }

  // Intercepts a PATCH request
  patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.patch(url, JSON.stringify(body), this.getRequestOptionArgs(options));
  }

  // Intercepts a DELETE request
  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    url = this.updateUrl(url);
    return super.delete(url, this.getRequestOptionArgs(options));
  }

  // Adds api server URL
  private updateUrl(req: string) {
    return  environment.apiUrl + req;
  }

  // Defines request options arguments
  private getRequestOptionArgs(options?: RequestOptionsArgs): RequestOptionsArgs {
    // Create request options and header objects
    if (options == null) { options = new RequestOptions(); }
    if (options.headers == null) { options.headers = new Headers(); }
    // Set request content type
    options.headers.set('Content-type', 'application/json');
    // Define authorization token
    const token = localStorage.getItem('token');
    if (token) { options.headers.set('Authorization', `Bearer ${token}`); }
    // Returns completed options
    return options;
  }

  // Handles response errors
  private handleError = (error: Response) => {
    // TODO : Handles errors properly
    //console.error(error);
    // Rethrow the error
    return Observable.throw(error);
  }
}
