// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Skills-Hub services
import { AuthService } from '../../core/auth.service';
import { FormService } from '../../shared/services/form.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class AccountLoginComponent implements OnInit {
  loginForm: FormGroup;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formService: FormService) {
      this.loginForm = this.formService.createFormGroup({
        'username' : ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)])],
        'password': ['']
      });
    }

  ngOnInit() {
      // On récupére l'url de retour
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/account/profile';
  }

  login() {
    if (this.loginForm.valid) {
      this.auth.login({ user: this.loginForm.value },
        res => this.router.navigateByUrl(this.returnUrl),
        err => this.formService.setFormGroupErrors(this.loginForm, err));
    }
  }
}
