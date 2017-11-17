// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Core service
import { ApiService } from './api.service';

@Injectable()
export class UserService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  register(user): Observable<any> {
    return this.post('/register', user);
  }

  login(user): Observable<any> {
    return this.post('/login', user);
  }

  logout(username): Observable<any> {
    return this.delete(`/${ username }`);
  }
}
