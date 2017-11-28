// Angular stuff
import { Component, OnInit, Input, ElementRef, NgZone, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';


// Skills-hub services
import { UserService } from '../../core/user.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  providers: [UserService]
})
export class EditComponent implements OnInit {
  public user: any;
  public address: any;
  public editAccountForm: FormGroup;
  public editAddressForm: FormGroup;
  public zoom: number;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private router: Router,
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
      // Création du formulaire pour l'édition des données du profil
      this.editAccountForm = this.formBuilder.group({
        'firstname' : ['', Validators.required],
        'lastname' : ['', Validators.required],
        'bio': ['']
      });

      // Création du contrôle pour la saisie d'une adresse
      this.editAddressForm = this.formBuilder.group({
        'search' : ['', Validators.required]
      });
  }

  ngOnInit() {
    this.user = this.userService.getUser()
    .map((res) => res.json())
    .subscribe(
      res => this.setAccount(res.user),
      error => console.error(error.json().error)
    );
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
    if (!this.editAddressForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAddress({ address: this.address })
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

  private setAccount(user) {
    if (user) {
      this.user = user;
      this.editAccountForm.setValue({
        firstname : this.user.firstname || '',
        lastname : this.user.lastname || '',
        bio: this.user.bio || ''
      });
      if (this.user.address) {
        this.address = this.user.address;
        this.zoom = 12;
        this.editAddressForm.setValue({
          search : this.user.address.long || ''
        });
      }
    }
  }

  private loadAutoComplete() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          // get the place result
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();

          // verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // Set address

          // Set zoom
          this.zoom = 12;
        });
      });
    });
  }
}
