// Angular stuff
import { Injectable, OnInit, OnDestroy, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelper } from 'angular2-jwt';

// Config
import { environment } from '../../environments/environment';

// Socket IO
import * as io from 'socket.io-client';

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
  private socket;

  public loggedIn = false;
  public channel: Observable<any>;

  constructor(
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
    // On crée une socket
    this.socket = io.connect(environment.socketUrl);
    this.channel = new Observable(observer => {
      this.socket.on('new event', event => observer.next(event));
      return () => { this.socket.off('new event'); };
    });
  }

  login(user) {
    // On execute la méthode login du service et on mappe le résultat
    return this.userService.login(user).map(res => res.json()).map(
      res => {
        localStorage.setItem('token', res.token);
        this.setCurrentUser(this.decodeUserFromToken(res.token));
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
    return this.userService.logout(this.currentUser.username).map(res => res.json()).map(res => {
      localStorage.removeItem('token');
      this.deleteCurrentUser();
      return !this.loggedIn;
    });
  }

  decodeUserFromToken(token) {
    return this.jwtHelper.decodeToken(token);
  }

  setCurrentUser(decodedUser) {
    if (decodedUser) {
      // On initialise l'utilisateur courant
      this.currentUser = { _id: decodedUser._id, username: decodedUser.username };
      // On met à jour le flag
      this.loggedIn = true;
      // On demande au serveur de mettre à jour l'id de la socket
      this.socket.emit('set socket', this.currentUser.username);
    }
  }

  deleteCurrentUser() {
    // On vide l'objet
    this.currentUser = { _id: '', username: ''};
    // On change le flag
    this.loggedIn = false;
    // On supprime le token
    localStorage.removeItem('token');
    // On demande au serveur de supprimé l'id de la socket
    this.socket.emit('unset socket', this.currentUser.username);
  }

}
