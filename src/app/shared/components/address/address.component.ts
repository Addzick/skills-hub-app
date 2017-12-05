// Angular stuff
import { Component, OnInit, Input, ElementRef, NgZone, ViewChild  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
// Skills-hub services
import { UserService } from '../../../core/user.service';
// Skills-hub components
import { ExtendInputComponent } from '../extend-input/extend-input.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address: any;
  public isEdit = false;
  public searchControl: FormControl;

  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private userService: UserService,
    private toastr: ToastsManager,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
     }

  ngOnInit() {
    // Initialisation du controle de recherche
    this.searchControl = new FormControl();
    if (this.hasAddress()) {
      this.searchControl.setValue(this.address.long);
    }
  }

  submit() {
    if (!this.hasAddress()) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAddress({ address: this.address })
      .subscribe(
        res => {
          this.isEdit = false;
          this.address = res.address;
        },
        err => {
          this.toastr.error('Veuillez contrôler les informations saisies !');
        }
      );
    }
  }

  setEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) { this.loadAutoComplete(); }
  }

  hasAddress(){
    return (this.address && this.address !== undefined && this.address !== null) 
      && (this.address.loc && this.address.loc !== undefined && this.address.loc !== null); 
  }

  private loadAutoComplete() {
    // Chargement de l'API Google
    this.mapsAPILoader.load().then(() => {
      
      // Définition du champ d'autocomplete
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, { types: ['address'] });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {

          // On récupére l'adresse depuis Google
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();          

          // On définit les composantes de l'adresse
          const street = place.address_components.find((component) => component.types.indexOf('route') !== -1);
          if (street === undefined || street === null) { return; }
          const number = place.address_components.find((component) => component.types.indexOf('street_number') !== -1);
          if (number === undefined || number === null) { return; }
          const zip = place.address_components.find((component) => component.types.indexOf('postal_code') !== -1);
          if (zip === undefined || zip === null) { return; }
          const city = place.address_components.find((component) => component.types.indexOf('locality') !== -1);
          if (city === undefined || city === null) { return; }
          this.address = {
            street: street.long_name || '',
            number: number.long_name || '',
            zip: zip.long_name || '',
            city: city.long_name || ''
          };

          // On définit la localisation
          if (place.geometry === undefined || place.geometry === null) { return; }
          this.address.loc = {
            type: 'Point',
            coordinates: [ place.geometry.location.lng(), place.geometry.location.lat() ],
          };
        });
      });
    });
  }
}
