// Angular stuff
import { Component, OnInit, OnDestroy, Input, ElementRef, NgZone, ViewChild  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// 3rd parties
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';

// Skills-hub services
import { AddressService } from '../../services/address.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
  providers: [AddressService]
})
export class AddressComponent implements OnInit {
  @Input() id?: string;
  @Input() tender?: string;
  @ViewChild('search')  searchElementRef: ElementRef;

  public address: any;
  public isEdit = false;
  public searchControl: FormControl;

  private addressSub: any;

  constructor(
    private addrService: AddressService,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
     }

  ngOnInit() {
    // Initialisation du controle de recherche
    this.searchControl = new FormControl();
    this.refresh();
  }

  submit() {
    if (!this.address || !this.address.loc) {
      this.searchControl.setErrors({ 'invalid': true }, { emitEvent: true });
    } else {
      this.addrService.upsert({
        address: this.address, 
        tender : this.tender})
      .subscribe(
        res => {
          this.isEdit = false;
          this.address = res.address;
        },
        err => this.searchControl.setErrors({ 'invalid': true }, { emitEvent: true })
      );
    }
  }

  setEdit() {
    this.isEdit = !this.isEdit;
    if (this.isEdit) { this.loadAutoComplete(); }
  }

  private refresh(){
    if(this.addressSub){ this.addressSub.unsubscribe(); }
    this.addressSub = this.getAddress().subscribe();
  }

  private getAddress(){
    return this.addrService
    .findById(this.id)
    .map(res => {
      this.address = res.address;
      this.searchControl.setValue(this.address.long);
    });
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
