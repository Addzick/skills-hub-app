// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

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
    private formBuilder: FormBuilder,
    private toastr: ToastsManager) {
      this.registerForm = formBuilder.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
        'confirmpwd': ['', Validators.compose([Validators.required, Validators.minLength(6)]), ],
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
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.auth.register(
        { user: this.registerForm.value },
        () => this.router.navigateByUrl(this.returnUrl),
        (err) => this.toastr.error('Veuillez contrôler les informations saisies !'));
    }
  }

}
