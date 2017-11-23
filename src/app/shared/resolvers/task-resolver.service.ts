// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { TaskService } from '../services/task.service';

@Injectable()
export class TaskResolver implements Resolve<any> {
  constructor(
    private taskService: TaskService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.taskService.findOne(route.params['task'], route.queryParams['childs'])
           .catch((err) => this.router.navigate(['/']));

  }
}
