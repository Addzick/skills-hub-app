// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { PublicationService, PublicationQuery } from './publication.service';

// Query interface
export interface TenderQuery extends PublicationQuery {
  startWorkDate?: Date;
  endWorkDate?: Date;
  canAcceptPrivateProps?: boolean;
  validOnly?: boolean;
  target?: string;
  localisation?: {
    longitude: number,
    latitude: number,
    distance: number
  };
}

@Injectable()
export class TenderService extends PublicationService {

  constructor(protected http: Http) {
    super(http);
    this.apiname = 'tasks';
   }

   close(id: string) { return this.post(`/tenders/${ id }/close`, ''); }

   cancel(id: string) { return this.post(`/tenders/${ id }/cancel`, ''); }

   findAll(query: TenderQuery) {
    return this.get('/tenders', { search: query });
  }
}
