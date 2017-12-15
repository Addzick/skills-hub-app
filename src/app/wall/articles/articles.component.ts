// Angular modules
import { Component, OnInit } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
  providers: [EventService]
})
export class ArticlesComponent implements OnInit {
  public events: Array<any>;
  public query: EventQuery = {
    types: [
      'article_published'
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
