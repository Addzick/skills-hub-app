// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Core services
import { ApiService } from '../../core/api.service';

// Query interface
export interface PublicationQuery {
  author?: string;
  title?: string;
  startDate?: Date;
  endDate?: Date;
  sort?: {};
  page?: number;
  size?: number;
}

@Injectable()
export abstract class PublicationService extends ApiService {

  protected apiname: string;

  constructor(
    protected http: Http) {
      super(http);
    }

    findOne(id: string) {
      return this.get(`/${ this.apiname }/${ id }`);
    }

    findAll(query: PublicationQuery) {
      return this.get(`/${ this.apiname }`, { search: query });
    }

    create(body) {
      return this.post(`/${ this.apiname }`, body);
    }

    edit(id: string, body) {
      return this.put(`/${ this.apiname }/${ id }`, body);
    }
    
    remove(id: string) {
      return this.delete(`/${ this.apiname }/${ id }`, '');
    }
}
