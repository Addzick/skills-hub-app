// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { PublicationService, PublicationQuery } from './publication.service';

// Query interface
export interface PropositionQuery extends PublicationQuery {
  startAmount?: number;
  endAmount?: number;
  validOnly?: boolean;
  source?: string;
}

@Injectable()
export class PropositionService extends PublicationService {

  constructor(protected http: Http) {
    super(http);
    this.apiname = 'propositions';
   }

   accept(id: string) { return this.post(`/propositions/${ id }/accept`, ''); }

   reject(id: string) { return this.post(`/propositions/${ id }/reject`, ''); }

   cancel(id: string) { return this.post(`/propositions/${ id }/cancel`, ''); }

   findAll(query: PropositionQuery) {
    return this.get('/propositions', { search: query });
  }
}
