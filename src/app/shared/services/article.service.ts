// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { PublicationService, PublicationQuery } from './publication.service';

// Query interface
export interface ArticleQuery extends PublicationQuery {
  categories?: Array<string>;
  tags?: Array<string>;
}

@Injectable()
export class ArticleService extends PublicationService {

  constructor(protected http: Http) {
    super(http);
    this.apiname = 'articles';
  }
  
  findAll(query: ArticleQuery) {
    return this.get('/articles', { search: query });
  }

  getTags(): Observable<any> {
    return this.get('/tags');
  }
}
