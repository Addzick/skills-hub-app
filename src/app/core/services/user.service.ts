// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  register(user): Observable<any> {
    return this.http.post('/register', user);
  }

  login(user): Observable<any> {
    return this.http.post('/login', user);
  }

  logout(username): Observable<any> {
    return this.http.delete(`/${ username }`);
  }
}
