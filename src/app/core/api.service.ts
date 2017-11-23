// Angular stuff
import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Environment variables
import { environment } from '../../environments/environment';

@Injectable()
export abstract class ApiService {

    constructor(protected http: Http) { }

    private updateUrl(req: string) {
        return environment.apiUrl + req;
    }

    get(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.get(this.updateUrl(url));
    }

    post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.post(this.updateUrl(url), body);
    }

    put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.put(this.updateUrl(url), body);
    }

    patch(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.patch(this.updateUrl(url), body);
    }

    delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
        return this.http.delete(this.updateUrl(url));
    }
}
