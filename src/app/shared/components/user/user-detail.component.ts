// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  public user: any = {};
  public error: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.user = data.user.user;
      }
    );
  }

}
