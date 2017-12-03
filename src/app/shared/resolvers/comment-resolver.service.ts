// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { CommentService } from '../services/comment.service';

@Injectable()
export class CommentResolver implements Resolve<any> {
  constructor(
    private commentService: CommentService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.commentService.findOne(route.params['comment'])
           .catch((err) => this.router.navigate(['/']));

  }
}
