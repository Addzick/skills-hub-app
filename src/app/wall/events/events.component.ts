// Angular modules
import { Component, OnInit } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// Core services
import { AuthService } from '../../core/auth.service';
// Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [EventService]
})
export class EventsComponent implements OnInit {
  public events: Array<any>;
  public query: EventQuery = {
    types: [
      'user_registered',
      'article_published',
      'article_commented',
      'article_liked',
      'tender_published',
      'tender_commented',
      'tender_liked',
      'proposition_published',
      'proposition_accepted',
      'proposition_rejected',
      'proposition_commented',
      'proposition_liked',
      'rating_published',
      'rating_commented',
      'rating_liked'
    ],
    sort: { updatedAt: 'desc'},
    page: 1,
    size: 10
  };

  constructor(
    private auth: AuthService,
    private eventService: EventService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    // Récupération des événements
    this.eventService.findAll(this.query).subscribe(
      res => this.events = res.events,
      err => console.error(err));

    // Souscription aux nouveaux evenements
    this.auth.channel.subscribe(
      (event) => {
        if(this.query.types.indexOf(event.type) !== -1) {
          this.toastr.info('Nouvelle(s) actualités');
          this.events.unshift(event);
        }
     },
     err => console.error(err));
  }

  isEventFromCurrentUser(event) {
    return event.author.getCurrentUserName == this.auth.getCurrentUserName();
  }
}