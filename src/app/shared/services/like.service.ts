// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core service
import { ApiService } from '../../core/api.service';

// Query interface
export interface LikeQuery {
  author?: string;
  source?: string;
  sort?: {};
  page?: number;
  size?: number;
}

@Injectable()
export class LikeService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  findAll(query: LikeQuery) {
    return this.get('/likes', { search: query });
  }

  findOne(id) {
    return this.get(`/likes/${ id }`);
  }

  like(body: string) {
    return this.post('/likes', body);
  }

  unlike(id: string) {
    return this.delete(`/likes/${ id }`);
  }
}
