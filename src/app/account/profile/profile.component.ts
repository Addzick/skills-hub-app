// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
// Rxjs stuff
import { Observable } from 'rxjs/Observable';
// Core services
import { UserService, UserQuery } from '../../core/user.service';
//Shared services
import { EventQuery } from '../../shared/services/event.service';

@Component({
  selector: 'app-account',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  providers: [UserService]
})
export class AccountProfileComponent implements OnInit, OnDestroy {
  public user: any;
  public events: Array<any>;

  public eventQuery: EventQuery = {
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
    private userService: UserService) {
  }

  ngOnInit() {
    this.subscription = this.getUser().subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  } 

  refresh() {
    this.subscription.unsubscribe();
    this.subscription = this.getUser().subscribe();
  }

  getUser() {
    return this.userService
    .getUser()
    .map((res) => {
        this.user = res.user;
        this.eventQuery.author = this.user._id;
      }
    ).catch((error) => {
      throw error;
    });
  }
}
