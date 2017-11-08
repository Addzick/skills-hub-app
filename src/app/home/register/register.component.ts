// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/services/auth.service';

// Skills-hub components
import { ExtendInput } from '../../shared/extend-input/extend-input.component';

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
    private toastr: ToastsManager,
    private router: Router) {
      this.registerForm = formBuilder.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'confirmpwd': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'lastname': ['', Validators.required],
        'firstname': ['', Validators.required],
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
    if (!this.registerForm.valid) {
      this.toastr.error('Veuillez compléter les informations saisies !');
    } else {
      this.auth.register({ user: this.registerForm.value }).subscribe(
        res => this.router.navigate(['/']),
        err => {
          if (err.status === 500) {
            const message = err.json().message;
            this.toastr.error(message);
          } else {
            const data = err.json().errors;
            const fields = Object.keys(data || {});
            fields.forEach((field) => {
              const control = this.registerForm.controls[field];
              if (control) {
                control.setErrors({ 'remote': data[field] });
              }
            });
          }
        }
      );
    }
  }

}
