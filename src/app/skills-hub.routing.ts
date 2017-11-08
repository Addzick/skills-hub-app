import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'articles',
    loadChildren: './article/article.module#ArticleModule'
  },
];
