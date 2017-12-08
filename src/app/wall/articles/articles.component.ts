// Angular modules
import { Component, OnInit } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Core services
import { AuthService } from '../../core/auth.service';
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
    sort: { updatedAt: 'desc'},
    page: 1,
    size: 5
  };
  constructor(
    private auth: AuthService,
    private eventService: EventService,
  ) { }

  ngOnInit() {
      // Récupération des événements
      this.eventService.findAll(this.query).subscribe(
        res => this.events = res.events,
        err => console.error(err));
  }

  isEventFromCurrentUser(event) {
    return event.author.getCurrentUserName == this.auth.getCurrentUserName();
  }
}
