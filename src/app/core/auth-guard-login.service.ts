import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import { state } from '@angular/core/src/animation/dsl';

@Injectable()
export class AuthGuardLogin implements CanActivate {

  constructor(
    public auth: AuthService,
    private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    current: RouterStateSnapshot) {
    // Un utilisateur est connecté, on renvoie OK
    if (this.auth.loggedIn) { return true; }

    // On redirige vers la page de login en stockant l'url de retour
    this.router.navigate(['/sign'], { queryParams: { returnUrl: current.url } });
    return false;
  }

}
