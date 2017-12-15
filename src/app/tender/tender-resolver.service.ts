// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';

import { TenderService } from '../shared/services/tender.service';

@Injectable()
export class TenderResolver implements Resolve<any> {
  constructor(
    private tenderService: TenderService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.tenderService.findOne(route.params['tender'])
           .catch((err) => this.router.navigate(['/']));

  }
}
