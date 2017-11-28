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
    this.user = this.userService.getUser()
    .map((res) => res.json())
    .subscribe(
      res => this.user = res.user,
      error => console.error(error.json().error)
    );
  }
}
