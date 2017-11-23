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

    return this.articleService.findOne(route.params['article'], route.queryParams['childs'])
           .catch((err) => this.router.navigate(['/']));

  }
}
