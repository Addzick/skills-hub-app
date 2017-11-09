// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/extend-input/extend-input.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  error = '';
  forgotForm: FormGroup;

  constructor(private auth: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private router: Router) {
      this.forgotForm = formBuilder.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
      });
     }

  ngOnInit() {
  }

  forgot() {
    if (!this.forgotForm.valid) {
      this.toastr.error('Veuillez compléter les informations saisies !');
    } else {
      this.auth.register({ user: this.forgotForm.value }).subscribe(
        res => this.router.navigate(['/']),
        err => {
          if (err.status === 500) {
            const message = err.json().message;
            this.toastr.error(message);
          } else {
            const data = err.json().errors;
            const fields = Object.keys(data || {});
            fields.forEach((field) => {
              const control = this.forgotForm.controls[field];
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
