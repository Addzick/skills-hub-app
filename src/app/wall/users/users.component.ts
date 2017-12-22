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
    this.usersSub = this.getUsers().subscribe();
  }

  ngOnDestroy() {
    if(this.usersSub) { this.usersSub.unsubscribe(); }
    if(this.timer) { this.timer.unsubscribe(); }
  }

  getUsers(){
    return this.userService.findAll({
      page: 1,
      size: 5,
      sortBy: 'createdAt',
      sortDir: 'desc'
    })
    .map(res => {
      this.users = res.users;
      this.currentUser = this.getNextUser();
      this.timer = this.autoSetCurrentUser();
    })
    .catch(err => { 
      console.error(err);
      throw err;
    });
  }

  getNextUser( ){
    let user: any;    
    if(this.users && this.users.length > 0) { 
      user = this.users[this.next];
      this.next ++;
      if(this.next >= this.users.length) { this.next = 0; }
    }
    return user;
  }

  autoSetCurrentUser(){
    return Observable.interval(5000).subscribe(i => this.currentUser = this.getNextUser());
  }

}
