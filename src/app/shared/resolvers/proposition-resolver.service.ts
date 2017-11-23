// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { PropositionService } from '../services/proposition.service';

@Injectable()
export class PropositionResolver implements Resolve<any> {
  constructor(
    private propositionService: PropositionService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.propositionService.findOne(route.params['proposition'], route.queryParams['childs'])
           .catch((err) => this.router.navigate(['/']));

  }
}
