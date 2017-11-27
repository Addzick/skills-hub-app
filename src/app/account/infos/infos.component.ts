// Angular stuff
import { Component, OnInit } from '@angular/core';

// Core services
import { UserService, UserQuery } from '../../core/user.service';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  user: any;
  errorMessage: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(
    res => this.user = res.json().user,
    error => this.errorMessage = <any>error);
  }

}
