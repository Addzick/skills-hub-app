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
      // On initialise la chaine de diffusion des evenements
      this.initChannel();
  }

  ngOnInit() {
    // On récupére le token depuis les cookie
    const token = localStorage.getItem('token');
    // On contrôle la présence du token
    if (token) {
      // Le token est-il expiré ?
      if (this.jwtHelper.isTokenExpired(token)) {
        // On execute la méthode de déconnexion
        this.deleteCurrentUser();
      } else {
        // On renseigne l'utilisateur courant a partir du token
        this.setCurrentUser(this.decodeUserFromToken(token));
      }
    }
  }

  ngOnDestroy() {
    // On déconnecte la socket
    this.socket.disconnect();
  }

  initChannel() {
    // On crée une channel
    this.channel = this.socket.fromEvent<any>('new event').map(data => data);
  }

  login(user, next, err) {
    // On execute la méthode login du service et on mappe le résultat
    this.userService.login(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        this.setCurrentUser(this.decodeUserFromToken(res.token));
        next();
      },
      error => err(error)
    );
  }

  register(user, next, err) {
    this.userService.register(user).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        const decodedUser = this.decodeUserFromToken(res.token);
        this.setCurrentUser(decodedUser);
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

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
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

  getCurrentUserEmail(): String {
    return (this.isLoggedIn() && this.currentUser) ? this.currentUser.username : '';
  }

  isLoggedIn() {
    if(localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

}
