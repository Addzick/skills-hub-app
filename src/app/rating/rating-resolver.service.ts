// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';

import { RatingService } from '../shared/services/rating.service';

@Injectable()
export class RatingResolver implements Resolve<any> {
  constructor(
    private ratingService: RatingService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.ratingService.findOne(route.params['rating'])
           .catch((err) => this.router.navigate(['/']));

  }
}
