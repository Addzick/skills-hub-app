// Angular stuff
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-Hub services
import { UserService } from '../services/user.service';

@Injectable()
export class AuthService {

  loggedIn = false;
  jwtHelper: JwtHelper = new JwtHelper();
  currentUser = { _id: '', username: '' };

  constructor(
    private userService: UserService,
    private toastr: ToastsManager,
    private router: Router) {
    // On récupére le token depuis les cookie
    const token = localStorage.getItem('token');
    // On contrôle la présence du token
    if (token) {
      // Le token est-il expiré ?
      if (this.jwtHelper.isTokenExpired(token)) {
        // On execute la méthode de déconnexion
        localStorage.removeItem('token');
      } else {
        // On renseigne l'utilisateur courant a partir du token
        this.setCurrentUser(this.decodeUserFromToken(token));
      }
    }
  }

  login(user) {
    // On execute la méthode login du service et on mappe le résultat
    return this.userService.login(user).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
        this.toastr.info('Vous êtes maintenant connecté !');
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
        this.toastr.info('Vous êtes maintenant connecté !');
        return this.loggedIn;
      }
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.loggedIn = false;
    this.currentUser = { _id: '', username: ''};
    this.toastr.info('Vous êtes maintenant déconnecté !');
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token).user;
  }

  setCurrentUser(decodedUser) {
    if (decodedUser) {
      this.loggedIn = true;
      this.currentUser._id = decodedUser._id;
      this.currentUser.username = decodedUser.username;
    }
  }
}
