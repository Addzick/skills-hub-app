import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { AuthService } from '../../services';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  error = '';
  registerForm: FormGroup;

  constructor(private auth: AuthService,
    private formBuilder: FormBuilder,
    private router: Router) {
      this.registerForm = formBuilder.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'confirmpwd': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'firstname': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        'lastname': ['', Validators.compose([Validators.required, Validators.pattern('[a-zA-Z ]*')])],
        'street': ['', Validators.required],
        'zip': ['', Validators.required],
        'city': ['', Validators.required],
      }, { validator: this.checkIfMatchingPasswords('password', 'confirmpwd')});
     }

  ngOnInit() {
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      const pwd = group.controls[passwordKey];
      const conf = group.controls[passwordConfirmationKey];
      if (pwd.value !== conf.value) {
        return conf.setErrors({notEquivalent: true});
      } else {
          return conf.setErrors(null);
      }
    };
  }

  register() {
    if (this.registerForm.valid) {
      this.auth.register({ user: this.registerForm.value }).subscribe(
        res => this.router.navigate(['/']),
        error => this.error = error
      );
    }
  }

}
