// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
// Rxjs stuff
import { Observable } from 'rxjs/Observable';
// Core services
import { UserService, UserQuery } from '../../core/user.service';
//Shared services
import { EventService, EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-account',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService]
})
export class AccountProfileComponent implements OnInit, OnDestroy {
  public user: any;
  public events: Array<any>;

  public query: EventQuery = {
    author: '',
    excludes: [
      'user_connected',
      'user_disconnected',
      'user_updated',
    ],
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 10
  };

  private subscription: any;
  
  constructor(
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
    return this.userService
    .getUser()
    .flatMap(
      (res) => {
        this.user = res.user;
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