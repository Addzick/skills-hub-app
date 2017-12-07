// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core service
import { ApiService } from '../../core/api.service';

// Query interface
export interface CommentQuery {
  author?: string;
  source?: string;
  sort?: {};
  page?: number;
  size?: number;
}

@Injectable()
export class CommentService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  findAll(query: CommentQuery) {
    return this.get('/comments', { search: query });
  }

  findOne(id) {
    return this.get(`/comments/${ id }`);
  }

  comment(body) {
    return this.post('/comments', body);
  }

  uncomment(id) {
    return this.delete(`/comments/${ id }`);
  }
}
