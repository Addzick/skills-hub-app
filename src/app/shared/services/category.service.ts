// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core service
import { ApiService } from '../../core/api.service';

@Injectable()
export class CategoryService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  findAll() {
    // On renvoie le résultat après execution des requêtes
    return this.get('/categories');
  }

  findOne(id) {
    return this.get(`/categories/${ id }`);
  }
}
