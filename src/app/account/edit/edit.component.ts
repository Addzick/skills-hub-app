// Angular stuff
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { UserService } from '../../core/user.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  @Input() user: any;

  editAccountForm: FormGroup;
  editAddressForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager) {
      // Création du formulaire pour l'édition des données du profil
      this.editAccountForm = formBuilder.group({
        'firstname' : ['', Validators.required],
        'lastname' : [''],
        'bio': [''],
      });

      // Création du formulaire pour l'édition de l'adresse du profil
      this.editAddressForm = formBuilder.group({
        'street' : ['', Validators.required],
        'complement' : [''],
        'zip' : ['', Validators.required],
        'city' : ['', Validators.required],
      });
     }

  ngOnInit() {
  }

  editAccount() {
    if (!this.editAccountForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAccount({ user: this.editAccountForm.value })
      .subscribe(
        res => {
          this.router.navigate(['/account']);
        },
        err => {
          this.toastr.error('Veuillez contrôler les informations saisies !');
        }
      );
    }
  }

  editAddress() {
    if (!this.editAccountForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAddress({ user: this.editAddressForm.value })
      .subscribe(
        res => {
          this.router.navigate(['/account']);
        },
        err => {
          this.toastr.error('Veuillez contrôler les informations saisies !');
        }
      );
    }
  }

}
