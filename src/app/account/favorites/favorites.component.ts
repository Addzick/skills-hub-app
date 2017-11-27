// Angular stuff
import { Component, OnInit } from '@angular/core';

// Core services
import { UserService, UserQuery } from '../../core/user.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {
  user: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUser().subscribe((res) => {
      this.user = res.json().user;
    });
  }

}
