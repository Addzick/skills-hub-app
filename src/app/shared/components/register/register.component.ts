// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Skills-hub services
import { AuthService } from '../../../core/auth.service';
import { FormService } from '../../services/form.service';

// Skills-hub components
import { ExtendInputComponent } from '../extend-input/extend-input.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formService: FormService) {
      this.registerForm = this.formService.createFormGroup({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'firstname': [''],
        'lastname' : [''],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'confirmpwd': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
      }, { validator: this.checkIfMatchingPasswords('password', 'confirmpwd')});
     }

  ngOnInit() {
    // On récupére l'url de retour
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account';
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
      this.auth.register(
        { user: this.registerForm.value },
        res => this.router.navigateByUrl(this.returnUrl),
        err => this.formService.setFormGroupErrors(this.registerForm, err));
    }
  }

}
