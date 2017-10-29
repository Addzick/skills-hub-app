import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {
  loggedIn = false;

  jwtHelper: JwtHelper = new JwtHelper();

  currentUser = { _id: '', username: '' };

  constructor(private userService: UserService,
              private router: Router) {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedUser = this.decodeUserFromToken(token);
      this.setCurrentUser(decodedUser);
    }
  }

  login(emailAndPassword) {
    console.log(emailAndPassword);
    return this.userService.login(emailAndPassword).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  register(user) {
    return this.userService.register(user).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.currentUser = { _id: '', username: ''};
  }

  decodeUserFromToken(token) {
    console.log(token);
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    if(decodedUser){
      this.loggedIn = true;
      this.currentUser._id = decodedUser._id;
      this.currentUser.username = decodedUser.username;
    }    
  }
}
