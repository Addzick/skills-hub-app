// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Core service
import { ApiService } from './api.service';

// Query interface
export interface UserQuery {
  lastname: string;
  firstname: string;
  abos: Array<string>;
  categories: Array<string>;
  startStars: number;
  endStars: number;
  localisation: {
    longitude: number,
    latitude: number,
    distance: number
  };
  sort: {};
  page: number;
  size: number;
}

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

  logout(): Observable<any> {
    return this.delete('/logout');
  }

  getUser(): Observable<any> {
    return this.get('/account');
  }

  setAccount(user): Observable<any> {
    return this.post('/account', user);
  }

  setAddress(address): Observable<any> {
    return this.put('/account', address);
  }

  findAll(query: UserQuery): Observable<any> {
      return this.get('/users', { search: query });
  }

  findOne(id): Observable<any> {
    return this.get(`/users/${ id }`);
  }
}
