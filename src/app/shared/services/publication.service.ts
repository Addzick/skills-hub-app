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
  childs?: {
    path: string,
    page: number,
    size: number,
    sort: {}
  };
}

@Injectable()
export abstract class PublicationService extends ApiService {

  protected apiname: string;

  constructor(
    protected http: Http) {
      super(http);
    }

    findOne(
      id: string,
      query: {
        childs?: {
          path: string,
          page: number,
          size: number,
          sort: {}
        }
      }) {
      return this.get(`/${ this.apiname }/${ id }`, { search : query });
    }

    findAll(query: PublicationQuery) {
      return this.get(`/${ this.apiname }`, { search: query });
    }

    count(query: {}) {
      return this.get(`/${ this.apiname }/count`, { search: query });
    }

    create(body: string) {
      return this.post(`/${ this.apiname }/create`, body);
    }

    edit(id: string, body: string) {
      return this.post(`/${ this.apiname }/${ id }/edit`, body);
    }

    publish(id: string) {
      return this.post(`/${ this.apiname }/${ id }/publish`, '');
    }

    remove(id: string) {
      return this.post(`/${ this.apiname }/${ id }/delete`, '');
    }

    comment(id: string, body: string) {
      return this.post(`/${ this.apiname }/${ id }/comment`, body);
    }

    uncomment(idPub: string, idComment: string) {
      return this.delete(`/${ this.apiname }/${ idPub }/${ idComment }`);
    }

    like(id: string, body: string) {
      return this.post(`/${ this.apiname }/${ id }/like`, body);
    }

    unlike(idPub: string, idLike: string) {
      return this.delete(`/${ this.apiname }/${ idPub }/${ idLike }`);
    }
}
