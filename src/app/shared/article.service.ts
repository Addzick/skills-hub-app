// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getAll(query: {
    title: String,
    categories: Array<String>,
    tags: Array<String>,
    page: Number,
    size: Number }): Observable<any> {
      return this.http.get('/articles', { search: query });
  }

  getFeed(query: {
    title: String,
    tags: Array<String>,
    page: Number,
    size: Number }): Observable<any> {
    return this.http.get('/articles/feed');
  }

  getById(articleId): Observable<any> {
    return this.http.get(`/articles/${articleId}`);
  }

  create(article): Observable<any> {
    return this.http.post('/articles', article);
  }

  edit(articleId, article): Observable<any> {
    return this.http.put(`/articles/${articleId}`, article);
  }

  publish(articleId): Observable<any> {
    return this.http.patch(`/articles/${articleId}`, {});
  }

  delete(articleId): Observable<any> {
    return this.http.delete(`/articles/${articleId}`);
  }
}
