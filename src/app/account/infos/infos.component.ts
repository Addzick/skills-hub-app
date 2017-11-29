// Angular stuff
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// Skills-hub services
import { UserService } from '../../core/user.service';
// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  @Input() user: any;
  public editForm: FormGroup;
  public isEdit = false;

  constructor(
    private userService: UserService,
    private formBuilder: FormBuilder,
    private toastr: ToastsManager) {
      this.editForm = this.formBuilder.group({
        'firstname' : ['', Validators.required],
        'lastname' : ['', Validators.required],
        'bio': ['']
      });
     }

  ngOnInit() {
    if (this.user) {
      this.editForm.setValue({
        firstname : this.user.firstname || '',
        lastname : this.user.lastname || '',
        bio: this.user.bio || ''
      });
    }
  }

  submit() {
    if (!this.editForm.valid) {
      this.toastr.error('Veuillez contrôler les informations saisies !');
    } else {
      this.userService.setAccount({ user: this.editForm.value })
      .subscribe(
        res => {
          this.isEdit = false;
          this.user = res.user;
        },
        err => {
          this.toastr.error('Veuillez contrôler les informations saisies !');
        }
      );
    }
  }

  setEdit() {
    this.isEdit = !this.isEdit;
  }

}
