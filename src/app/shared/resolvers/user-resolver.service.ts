// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { UserService } from '../../core/user.service';

@Injectable()
export class UserResolver implements Resolve<any> {
  constructor(
    private userService: UserService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {
    return this.userService.findOne(route.params['user'])
           .catch((err) => this.router.navigate(['/']));

  }
}
