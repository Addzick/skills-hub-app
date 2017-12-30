// Angular modules
import { Injectable } from '@angular/core';
import { Http, RequestOptionsArgs } from '@angular/http';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// Skills-hub services
import { ApiService } from '../../core/api.service';

@Injectable()
export class AddressService extends ApiService {

  constructor(protected http: Http) {
    super(http);
  }
  
  findById(id: string) {
    return this.get(`/addresses/${ id }`);
  }

  upsert(body) {
    return this.post('/addresses', body);
  }

  delete(id: string) {
    return this.delete(`/addresses/${ id }`);
  }
}
