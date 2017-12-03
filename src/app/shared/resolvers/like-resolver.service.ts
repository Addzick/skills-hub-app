// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { LikeService } from '../services/like.service';

@Injectable()
export class LikeResolver implements Resolve<any> {
  constructor(
    private likeService: LikeService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.likeService.findOne(route.params['like'])
           .catch((err) => this.router.navigate(['/']));

  }
}
