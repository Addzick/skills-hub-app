// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { ArticleService } from '../services/article.service';

@Injectable()
export class ArticleResolver implements Resolve<any> {
  constructor(
    private articleService: ArticleService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    const id = route.params['article'];
    if(id !== undefined && id !== '') {
      return this.articleService.findOne(id)
      .catch((err) => this.router.navigate(['/']));
    }
  }
}
