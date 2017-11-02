// Angular stuff
import { Injectable } from '@angular/core';

// Socket IO
import * as io from 'socket.io-client';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../rxjs-extensions';

// Toaster
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Config
import { environment } from '../../../environments/environment';

@Injectable()
export class EventService {
  private socket;

  constructor(private toastr: ToastsManager) { }

  getEvents() {
    let observable = new Observable(observer => {
      this.socket = io(environment.socketUrl);
      this.socket.on('new event', (event) => {
        console.log(event);
        observer.next(event);    
      });
      return () => {
        this.socket.disconnect();
      };  
    })     
    return observable;
  }  

}
