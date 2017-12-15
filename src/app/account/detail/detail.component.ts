// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// Rxjs stuff
import { Observable } from 'rxjs/Observable';
// Core services
import { UserService, UserQuery } from '../../core/user.service';
//Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-account-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class AccountDetailComponent implements OnInit {
  public user: any;
  public events: Array<any>;

  public query: EventQuery = {
    author: '',
    types: [
      'user_registered',
      'article_published',
      'tender_published',
      'proposition_published',
      'rating_published',
      'article_commented',
      'tender_commented',
      'proposition_commented',
      'rating_commented',
      'article_liked',
      'tender_liked',
      'proposition_liked',
      'rating_liked',
    ],
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 10
  };

  private subscription: any;
  
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private eventService: EventService) {
  }

  ngOnInit() {
    this.subscription = this.getUser().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 

  onNotify(user: any):void {
    this.refresh();
  }

  refresh() {
    this.subscription.unsubscribe();
    this.subscription = this.getUser().subscribe();
  }

  getUser() {
    return this.route.data
    .flatMap(
      (res) => {
        this.user = res.account.user;
        this.query.author = this.user._id;
        return this.eventService
        .findAll(this.query)
        .map(
          (res) => {
            this.events = res.events;
          })
         .catch((error) => {
            throw error;
          });
      })
     .catch((error) => {
        throw error;
      });
  }
}
