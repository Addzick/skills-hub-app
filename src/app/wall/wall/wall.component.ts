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
  public query: EventQuery = {
    types: [
      'article_published',
      'article_commented',
      'article_liked',
      'tender_published',
      'tender_closed',
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
    this.getEvents();
    this.connection = this.auth.channel.subscribe((event) => {
      this.toastr.info('Nouveaux événements');
      this.getEvents();
     });
  }
  getEvents() {
    this.eventService.findAll(this.query).subscribe(
      res => {
        const result = res.json();
        if (result) { this.events = result.events; }
      },
      error => console.error(error.json().error)
    );
  }
}
