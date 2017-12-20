// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core service
import { ApiService } from '../../core/api.service';

// Query interface
export interface CategoryQuery {
  sortBy?: string;
  sortDir?: string;
  page?: number;
  size?: number;
}

@Injectable()
export class CategoryService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  findAll(query: CategoryQuery) {
    return this.get('/categories', { search: query });
  }

  findOne(id) {
    return this.get(`/categories/${ id }`);
  }
}
