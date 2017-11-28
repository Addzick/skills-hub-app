// Angular stuff
import { Component, OnInit, Input, ElementRef, NgZone, ViewChild  } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { MapsAPILoader } from '@agm/core';
import {} from '@types/googlemaps';
// Skills-hub services
import { UserService } from '../../core/user.service';
// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  @Input() address: any;
  public editForm: FormGroup;
  public isEdit: boolean = false;
  public zoom: number;
  
  @ViewChild('search')
  public searchElementRef: ElementRef;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager,
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone) {
      this.editForm = this.formBuilder.group({
        'search' : ['', Validators.required]
      });
     }

  ngOnInit() {
    if (this.address) {
      this.editForm.setValue({
        search : this.address.long
      });
    }
  }

  submit() {
    if (!this.editForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAddress({ address: this.address })
      .subscribe(
        res => {
          this.isEdit = false;
        },
        err => {
          this.toastr.error('Veuillez contrôler les informations saisies !');
        }
      );
    }
  }

  setEdit(){
    this.isEdit = !this.isEdit;
  }

  private loadAutoComplete() {
    // load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
      const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ['address']
      });
      autocomplete.addListener('place_changed', () => {
        this.ngZone.run(() => {
          const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }
          // Set address

          
          this.zoom = 12;
        });
      });
    });
  }

}
