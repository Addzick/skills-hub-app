// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { UserService } from '../../core/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  public currentUser: any;
  private users: Array<any>;
  private usersSub: any;
  private timer: any;
  private next: number = 0;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersSub = this.userService.findAll({
      page: 1,
      size: 5,
      sortBy: 'createdAt',
      sortDir: 'desc'
    }).subscribe(
      res => {
        this.users = res.users;
        this.timer = this.autoSetCurrentUser();
      },
      err => console.error(err));
  }

  ngOnDestroy() {
    if(this.usersSub) { this.usersSub.unsubscribe(); }
    if(this.timer) { this.timer.unsubscribe(); }
  }

  autoSetCurrentUser(){
    return Observable.interval(5000).subscribe(i => {
      if(this.users && this.users.length > 0) { 
        this.currentUser = this.users[this.next];
        this.next ++;
        if(this.next >= this.users.length) { this.next = 0; }
      }
    });
  }

}
