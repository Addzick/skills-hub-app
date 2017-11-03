// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';


// Skills-Hub services
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error = '';
  loginForm: FormGroup;

  constructor(private auth: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) {
                this.loginForm = this.formBuilder.group({
                  'email' : ['', Validators.compose([Validators.required, Validators.email])],
                  'password': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ]
                });
               }

  ngOnInit() {
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login({ user: this.loginForm.value }).subscribe(
        res => this.router.navigate(['/']),
        error => this.error = error
      );
    }
  }
}
