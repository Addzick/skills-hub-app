// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-Hub services
import { AuthService } from '../../core/auth.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/extend-input/extend-input.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager) {
      this.loginForm = this.formBuilder.group({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'password': ['', Validators.required ]
      });
    }

  ngOnInit() {
    // Reset login status
    this.auth.logout();

    // On récupére l'url de retour
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  login() {
    if (!this.loginForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      // On change l'état de la fenêtre
      this.loading = true;
      // On lance la procédure d'authentification
      this.auth.login({ user: this.loginForm.value })
      .subscribe(
        res => {
          this.loading = true;
          this.router.navigateByUrl(this.returnUrl);
        },
        err => {
          this.loading = false;
          this.toastr.error('Impossible de se connecter. Merci de réessayer ultérieurement.');
        }
      );
    }
  }
}
