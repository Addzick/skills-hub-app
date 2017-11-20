// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { ApiService } from '../../core/api.service';

@Injectable()
export class ArticleService extends ApiService {

  constructor(protected http: Http) {
    super(http);
   }

  getAll(query: {
    title: String,
    categories: Array<String>,
    tags: Array<String>,
    sort: {},
    page: Number,
    size: Number }): Observable<any> {
      return this.get('/articles', { search: query });
  }

  getFeed(query: {
    title: String,
    tags: Array<String>,
    sort: {},
    page: Number,
    size: Number }): Observable<any> {
    return this.get('/articles/feed');
  }

  getById(articleId): Observable<any> {
    return this.get(`/articles/${articleId}`);
  }

  create(article): Observable<any> {
    return this.post('/articles', article);
  }

  edit(articleId, article): Observable<any> {
    return this.put(`/articles/${articleId}`, article);
  }

  publish(articleId): Observable<any> {
    return this.patch(`/articles/${articleId}`, '');
  }

  delete(articleId): Observable<any> {
    return this.delete(`/articles/${articleId}`);
  }
}
