import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule  } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import 'hammerjs';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent, HomeComponent, RegisterComponent, LoginComponent, LogoutComponent, ArticleComponent } from './components';
import { AuthService, AuthGuardLogin, UserService } from './services';

import { routes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    LogoutComponent,
    ArticleComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes), 
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthService,
    AuthGuardLogin,
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
