import { Routes, RouterModule }  from '@angular/router';

import { 
  AppComponent,
  HomeComponent, 
  RegisterComponent,
  LoginComponent,
  LogoutComponent,
  ArticleComponent,  
} from './components/index';

import { AuthGuardLogin } from './services';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path:'register',
    component: RegisterComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'logout',
    component: LogoutComponent
  },
  {
    path: 'articles',
    component: ArticleComponent,
    canActivate: [AuthGuardLogin]
  },
];