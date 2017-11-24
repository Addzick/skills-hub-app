import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuardLogin } from './core/auth-guard-login.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'wall',
    loadChildren: './wall/wall.module#WallModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
    canActivate: [AuthGuardLogin]
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule',
    canActivate: [AuthGuardLogin]
  },
];
