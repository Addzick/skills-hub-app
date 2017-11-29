// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Shared services
import {EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input() user: any;
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
    this.getEvents().subscribe();
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
