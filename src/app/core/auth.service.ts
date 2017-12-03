// Angular stuff
import { Injectable, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

// Socket IO
import { Socket } from 'ng-socket-io';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Observable } from 'rxjs/Observable';
import './rxjs-extensions';

// Skills-Hub services
import { UserService } from './user.service';


@Injectable()
export class AuthService implements OnInit, OnDestroy {

  private jwtHelper: JwtHelper = new JwtHelper();
  private currentUser = { _id: '', username: '' };
  public channel: Observable<any>;

  constructor(
    private socket: Socket,
    private userService: UserService,
    private toastr: ToastsManager,
    private router: Router) {
      // On crée une channel
    this.channel = this.socket.fromEvent<any>('new event').map(data => data);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    // On déconnecte la socket
    this.socket.disconnect();
  }

  login(user, next, err) {
    // On execute la méthode login du service et on mappe le résultat
    this.userService.login(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.setCurrentUser();
        next();
      },
      error => err(error)
    );
  }

  register(user, next, err) {
    this.userService.register(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.setCurrentUser();
        next();
      },
      error => err(error)
    );
  }

  logout(next, err) {
    this.userService.logout().subscribe(
      res => {
        localStorage.removeItem('token');
        this.deleteCurrentUser();
        next();
      },
      error => {
        localStorage.removeItem('token');
        this.deleteCurrentUser();
        err(error);
      }
    );
  }

  setCurrentUser() {
    const decodedUser = this.jwtHelper.decodeToken(localStorage.getItem('token'));
    if (decodedUser) {
      // On initialise l'utilisateur courant
      this.currentUser = { _id: decodedUser._id, username: decodedUser.username };
      // On demande au serveur de mettre à jour l'id de la socket
      this.socket.emit('set socket', this.currentUser.username);
    }
  }

  deleteCurrentUser() {
    // On vide l'objet
    this.currentUser = { _id: '', username: ''};
    // On supprime le token
    localStorage.removeItem('token');
    // On demande au serveur de supprimé l'id de la socket
    this.socket.emit('unset socket', this.currentUser.username);
  }

  getCurrentUserName() {
    return this.currentUser.username;
  }

  isLoggedIn() {
    const token = localStorage.getItem('token');
    const hastoken = token && !this.jwtHelper.isTokenExpired(token);
    if(hastoken && this.currentUser._id == '') { this.setCurrentUser(); }
    return hastoken;
  }

}
