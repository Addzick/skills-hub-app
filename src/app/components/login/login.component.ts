import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../services';

interface User {
  email: String,
  password: String
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  user: User = {
    email: '',
    password: ''
  };

  error = '';

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.auth.logout();
  }

  login() {
    this.auth.login({ user: this.user } ).subscribe(
      res => this.router.navigate(['/']),
      error => this.error = error
    );
  }

}
