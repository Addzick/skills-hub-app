// Angular stuff
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

// Shared services
import {EventService, EventQuery } from '../../shared/services/event.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit, OnDestroy {
  @Input() user: any;
  private connection: any;

  events: Array<any>;
  query: EventQuery = {
    excludes: [
      'user_connected',
      'user_disconnected'
    ],
    page: 1,
    size: 10
  };
  
  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.connection = this.getEvents().subscribe();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getEvents() {
    this.query.authors = [ this.user ? this.user._id : 'none' ];
    return this.eventService
    .findAll(this.query)
    .map(
      (res) => {
        this.events = res.events;
      })
     .catch((error) => {
        throw error;
      });
  }

}
