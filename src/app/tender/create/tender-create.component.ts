// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { FormService } from '../../shared/services/form.service';
import { CategoryService } from '../../shared/services/category.service';
import { TenderService } from '../../shared/services/tender.service';

@Component({
  selector: 'app-tender-create',
  templateUrl: './tender-create.component.html',
  styleUrls: ['./tender-create.component.scss'],
  providers:[CategoryService]
})
export class TenderCreateComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;  
  public tender: any;

  public categories: [{}];
  private categoriesSub: any;

  constructor(
    private router: Router,
    private formService: FormService,
    private categoryService: CategoryService,
    private tenderService: TenderService) {

    this.createForm = this.formService.createFormGroup({ 
      'title' : ['', Validators.required],
      'category' : ['', Validators.required],
      'workDate' : ['', Validators.required],
      'validityStart' : ['', Validators.required],
      'validityEnd' : ['', Validators.required],
      'description': ['']
    });
  }

  ngOnInit() {
    const start: Date = new Date();
    this.tender = {
      title: '',
      category: '',
      description: '',
      validityStart: start,
      validityEnd: new Date(start.setDate(start.getDate() + 5)),
      workDate: new Date(start.setDate(start.getDate() + 2)),
    };
    this.formService.setFormGroupValues(this.createForm, this.tender);
    this.categoriesSub = this.getCategories();
  }

  ngOnDestroy() {
    if(this.categoriesSub) { this.categoriesSub.unsubscribe(); }
  }

  submit() {
    if (this.createForm.valid) {
      this.formService.getFormGroupValues(this.createForm, this.tender);
      this.tenderService.create({ tender: this.tender }).subscribe(
        res => this.router.navigate(['/tender', res.tender._id, 'detail']),
        err => this.formService.setFormGroupErrors(this.createForm, err)
      );
    }
  }

  reset() {
    this.router.navigate(['/']);
  }

  getCategories() {
    return this.categoryService
    .findAll({
      sortBy: 'title',
      sortDir: 'asc'
    })
    .subscribe(
      res => this.categories = res.categories,
      err => console.error(err)
    );
  }

}