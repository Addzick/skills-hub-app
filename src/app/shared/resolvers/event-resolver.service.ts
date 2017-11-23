// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { EventService } from '../services/event.service';

@Injectable()
export class EventResolver implements Resolve<any> {
  constructor(
    private eventService: EventService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.eventService.findOne(route.params['event'])
           .catch((err) => this.router.navigate(['/']));

  }
}
