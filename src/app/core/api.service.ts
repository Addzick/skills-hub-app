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

    protected get(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http
        .get(this.updateUrl(url), options)
        .map((res: Response) => {
            return res.json();
        });
    }

    protected post(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http
        .post(this.updateUrl(url), body, options)
        .map((res: Response) => {
            return res.json();
        });
    }

    protected put(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http
        .put(this.updateUrl(url), body, options)
        .map((res: Response) => {
            return res.json();
        });
    }

    protected patch(url: string, body: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http
        .patch(this.updateUrl(url), body, options)
        .map((res: Response) => {
            return res.json();
        });
    }

    protected delete(url: string, options?: RequestOptionsArgs): Observable<any> {
        return this.http.delete(this.updateUrl(url), options)
        .map((res: Response) => {
            return res.json();
        });
    }
}
