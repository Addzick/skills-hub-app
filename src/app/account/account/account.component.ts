// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';

// Core services
import { UserService, UserQuery } from '../../core/user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [UserService]
})
export class AccountComponent implements OnInit, OnDestroy {
  public user: any;
  private connection: any;
  
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.connection = this.getUser().subscribe();
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }

  getUser() {
    return this.userService
    .getUser()
    .map(
      (res) => {
        this.user = res.user;
      })
     .catch((error) => {
        throw error;
      });
  }

  onNotify(user: any):void {
    this.connection.unsubscribe();
    this.connection = this.getUser().subscribe();
  }
}
