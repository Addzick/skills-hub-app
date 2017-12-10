// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

// Skills-Hub services
import { AuthService } from '../../../core/auth.service';
import { FormService } from '../../services/form.service';

// Skills-hub components
import { ExtendInputComponent } from '../extend-input/extend-input.component';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {
  forgotForm: FormGroup;
  returnUrl: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formService: FormService) {
      this.forgotForm = this.formService.createFormGroup({
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
      });
     }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  forgot() {
    if (this.forgotForm.valid) {
      
    }
  }

}
