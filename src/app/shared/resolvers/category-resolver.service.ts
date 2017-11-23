// Angular modules
import { Injectable, } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

import { CategoryService } from '../services/category.service';

@Injectable()
export class CategoryResolver implements Resolve<any> {
  constructor(
    private categoryService: CategoryService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    return this.categoryService.findOne(route.params['category'])
           .catch((err) => this.router.navigate(['/']));

  }
}
