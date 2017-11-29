// Angular stuff
import { Component, OnInit } from '@angular/core';

// Core services
import { UserService, UserQuery } from '../../core/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [UserService]
})
export class AccountComponent implements OnInit {
  public user: any;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUser().subscribe();
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
}
