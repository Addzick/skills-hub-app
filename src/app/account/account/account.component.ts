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
  constructor(private userService: UserService) { }

  ngOnInit() {
    
  }
}
