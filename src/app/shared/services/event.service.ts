// Angular modules
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core service
import { ApiService } from '../../core/api.service';

// Query interface
export interface EventQuery {
  types?: Array<string>;
  startDate?: Date;
  endDate?: Date;
  authors?: Array<string>;
  localisation?: {
    longitude: number,
    latitude: number,
    distance: number
  };
}

@Injectable()
export class EventService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }

  findAll(query: EventQuery) {
    return this.get('/events', { search: query });
  }

  findOne(id) {
    return this.get(`/events/${ id }`);
  }
}