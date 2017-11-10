// Angular stuff
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/extend-input/extend-input.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private auth: AuthService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager) {
      this.contactForm = formBuilder.group({
        'email' : [this.auth.getCurrentUserEmail(), Validators.compose([Validators.required, Validators.email])],
        'subject': [''],
        'message': [''],
      });
    }

  ngOnInit() {
  }

  send() {
    if (!this.contactForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.toastr.success('Nous vous remercions pour votre message et prendrons contact avec vous très rapidement.');
    }
  }
}
