// Angular modules
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// Core services
import { AuthService } from '../../../core/auth.service';
// Shared services
import { EventService, EventQuery } from '../../services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [EventService]
})
export class EventsComponent implements OnInit, OnDestroy {
  @Input() query: EventQuery 

  public events: Array<any> = new Array<any>();
  public total: number = 0;
  private eventSub: any;
  private channelSub: any;
  private toastrSub: any;
  
  constructor(
    private auth: AuthService,
    private eventService: EventService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    this.refresh();
    this.channelSub = this.auth.channel.subscribe(
      event => this.toastr.info('Nouvelle(s) actualités'),
      err => console.error(err)
    );
    this.toastrSub = this.toastr.onClickToast().subscribe(toast => {
      this.query.page = 1;
      this.events = new Array<any>();
      this.refresh();
    });
  }

  ngOnDestroy(){
    if(this.eventSub) { this.eventSub.unsubscribe(); }
    if(this.channelSub) { this.channelSub.unsubscribe(); }
    if(this.toastrSub) { this.toastrSub.unsubscribe(); }
  }
     
  refresh(){
    if(this.eventSub) { this.eventSub.unsubscribe(); }
    this.eventSub = this.getEvents().subscribe();
  }

  getEvents() {
    return this.eventService.findAll(this.query)
    .map(res => {
      const events = res.events;
      if(events && events.length > 0) { events.forEach(e => this.events.push(e)); }
      this.total = res.count;
    })
    .catch(err => { 
      console.error(err);
      throw err;
    });
  }

  loadMore() {
    this.query.page += 1;
    this.refresh();
  }
}
