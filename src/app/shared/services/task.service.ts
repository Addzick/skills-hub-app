// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { PublicationService, PublicationQuery } from './publication.service';

// Query interface
export interface TaskQuery extends PublicationQuery {
  startAmount?: number;
  endAmount?: number;
  startCompletionDate?: Date;
  endCompletionDate?: Date;
  onSite?: boolean;
  materialIsSupplied?: boolean;
  concern?: string;
}

@Injectable()
export class TaskService extends PublicationService {

  constructor(protected http: Http) {
    super(http);
    this.apiname = 'tasks';
   }

   confirm(id: string) { return this.post(`/tasks/${ id }/confirm`, ''); }

   pay(id: string) { return this.post(`/tasks/${ id }/pay`, ''); }

   cancel(id: string) { return this.post(`/tasks/${ id }/cancel`, ''); }

   findAll(query: TaskQuery) {
    return this.get('/tasks', { search: query });
  }
}
