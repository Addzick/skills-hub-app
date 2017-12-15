// Angular stuff
import { Routes } from '@angular/router';
// Login guard
import { AuthGuardLogin } from './core/auth-guard-login.service';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'account',
    loadChildren: './account/account.module#AccountModule'
  },
  {
    path: 'article',
    loadChildren: './article/article.module#ArticleModule'
  },
  {
    path: 'dashboard',
    loadChildren: './dashboard/dashboard.module#DashboardModule',
  },
  {
    path: 'portfolio',
    loadChildren: './portfolio/portfolio.module#PortfolioModule'
  },
  {
    path: 'proposition',
    loadChildren: './proposition/proposition.module#PropositionModule'
  },
  {
    path: 'rating',
    loadChildren: './rating/rating.module#RatingModule'
  },
  {
    path: 'task',
    loadChildren: './task/task.module#TaskModule'
  },
  {
    path: 'tender',
    loadChildren: './tender/tender.module#TenderModule'
  },
  {
    path: 'wall',
    loadChildren: './wall/wall.module#WallModule',
  }
];
