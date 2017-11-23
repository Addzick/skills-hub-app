// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { PublicationService, PublicationQuery } from './publication.service';

// Query interface
export interface RatingQuery extends PublicationQuery {
  target?: string;
  concern?: string;
}

@Injectable()
export class RatingService extends PublicationService {

  constructor(protected http: Http) {
    super(http);
    this.apiname = 'ratings';
   }

   findAll(query: RatingQuery) {
    return this.get('/ratings', { search: query });
  }
}
