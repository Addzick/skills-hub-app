// Angular modules
import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Core services
import { AuthService } from '../../core/auth.service';
import { environment } from '../../../environments/environment';

// Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  providers: [EventService]
})
export class WallComponent implements OnInit, OnDestroy {
  private connection;
  private socketUrl = environment.socketUrl;
  public events: Array<any>;
  public query: EventQuery = {};

  constructor(
    private auth: AuthService,
    private eventService: EventService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      // On définit le conteneur pour ng2-toastr
      this.toastr.setRootViewContainerRef(vcr);
     }

  ngOnInit() {
    this.initEvents();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
   }

  initEvents() {
    this.eventService.findAll(this.query).subscribe(
      res => {
        const result = res.json();
        if (result) { 
          this.events = result.events;
          this.events.sort(this.sortEvent); 
        }
      },
      error => console.error(error.json().error)
    );
    
    this.connection = this.auth.channel.subscribe((event) => {
      this.toastr.info('Nouveaux événements');
      this.events.push(event);
      this.events.sort(this.sortEvent);
     });
  }

  sortEvent(event1, event2){
    if ( event1.updatedAt > event2.updatedAt ){
      return -1;
    }else if( event1.updatedAt < event2.updatedAt ){
        return 1;
    }else{
      return 0;	
    }
  }

}