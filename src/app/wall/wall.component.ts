// Angular modules
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../core/rxjs-extensions';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Core services
import { AuthService } from '../core/auth.service';
import { environment } from '../../environments/environment';

// Shared services
import { EventService, EventQuery } from '../shared/services/event.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
  providers: [EventService]
})
export class WallComponent implements OnInit, OnDestroy {
  private channel: any;
  private subscription: any;
  private socketUrl = environment.socketUrl;

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
    private toastr: ToastsManager) {
     }

  ngOnInit() {
    this.initEvents();
  }

  ngOnDestroy() {
    this.channel.unsubscribe();
    this.subscription.unsubscribe();
  }

  initEvents() {
    this.subscription = this.getEvents().subscribe();
    this.channel = this.auth.channel.subscribe((event) => {
      this.toastr.info('Nouveaux événements');
      this.subscription.unsubscribe();
      this.subscription = this.getEvents().subscribe();
     });
  }

  getEvents() {
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

  isEventFromCurrentUser(event) {
    return event.author.getCurrentUserName == this.auth.getCurrentUserName();
  }
}
