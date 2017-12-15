// Angular modules
import { Component, OnInit } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-tenders',
  templateUrl: './tenders.component.html',
  styleUrls: ['./tenders.component.scss'],
  providers: [EventService]
})
export class TendersComponent implements OnInit {
  public events: Array<any>;
  public query: EventQuery = {
    types: [
      'tender_published'
    ],
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 5
  };
  constructor(private eventService: EventService) { }

  ngOnInit() {
      // Récupération des événements
      this.eventService.findAll(this.query).subscribe(
        res => this.events = res.events,
        err => console.error(err));
  }
}
