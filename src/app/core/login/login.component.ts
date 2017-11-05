// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { ExtendInput } from '../../shared/extend-input/extend-input.component';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

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
              private toastr: ToastsManager,
              private router: Router) {
                this.loginForm = this.formBuilder.group({
                  'email' : ['', Validators.compose([Validators.required, Validators.email])],
                  'password': ['', Validators.required ]
                });
               }

  ngOnInit() {
  }

  login() {
    if(!this.loginForm.valid){
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.auth.login({ user: this.loginForm.value }).subscribe(
        res => this.router.navigate(['/']),
        err => { 
          if(err.status === 500) {
            const message = err.json().message;
            this.toastr.error(message);
          } else {
            const data = err.json().errors;
            const fields = Object.keys(data || {});            
            fields.forEach((field) => {
              this.loginForm.controls[field].setErrors({ 'remote': data[field] });
            });
          }
        }
      );
    }
  }
}
