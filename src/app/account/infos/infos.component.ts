// Angular stuff
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { UserService } from '../../core/user.service';
import { FormService } from '../../shared/services/form.service';
// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-account-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class AccountInfosComponent implements OnInit {
  @Input() user: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  public editForm: FormGroup;
  public isEdit = false;

  constructor(
    private userService: UserService,
    private formService: FormService) {
      this.editForm = this.formService.createFormGroup({
        'username' : ['', Validators.compose([Validators.required, Validators.pattern(/^[A-Za-z0-9]+(?:[ _-][A-Za-z0-9]+)*$/)])],
        'email' : ['', Validators.compose([Validators.required, Validators.email])],
        'firstname' : ['', Validators.required],
        'lastname' : ['', Validators.required],
        'bio': ['']
      });
     }

  ngOnInit() {
    this.formService.setFormGroupValues(this.editForm, this.user);
  }

  submit() {
    if (this.editForm.valid) {
      this.userService.setAccount({ user: this.editForm.value })
      .subscribe(
        res => {
          this.isEdit = false;
          this.user = res.user;
          this.notify.emit(this.user);
        },
        err => this.formService.setFormGroupErrors(this.editForm, err)
      );
    }
  }

  setEdit() {
    this.isEdit = !this.isEdit;
  }

}
