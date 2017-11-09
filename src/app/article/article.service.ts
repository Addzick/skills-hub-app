// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';

@Injectable()
export class ArticleService {

  constructor(private http: Http) { }

  getAll(): Observable<any> {
    return this.http.get('/articles');
  }

  getFeed(): Observable<any> {
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
