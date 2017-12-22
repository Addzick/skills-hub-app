// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { FormService } from '../../shared/services/form.service';
import { CategoryService } from '../../shared/services/category.service';
import { TenderService } from '../../shared/services/tender.service';
import { DatePipe } from '@angular/common/src/pipes';
import { DateFormatPipe } from 'angular2-moment/date-format.pipe';

@Component({
  selector: 'app-tender-edit',
  templateUrl: './tender-edit.component.html',
  styleUrls: ['./tender-edit.component.scss']
})
export class TenderEditComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;  
  public tender: any;  
  private tenderSub: any;

  public categories: [{}];
  private categoriesSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formService: FormService,
    private categoryService: CategoryService,
    private tenderService: TenderService
    ) {
      this.editForm = this.formService.createFormGroup({ 
        'title' : ['', Validators.required],
        'category' : ['', Validators.required],
        'workDate' : ['', Validators.required],
        'validityStart' : ['', Validators.required],
        'validityEnd' : ['', Validators.required],
        'description': ['']
      });
    }

  ngOnInit() {
    this.tenderSub =  this.getTender().subscribe();
  }

  ngOnDestroy() {
    if(this.tenderSub) { this.tenderSub.unsubscribe(); }
  }

  submit() {
    if (this.editForm.valid) {
      this.formService.getFormGroupValues(this.editForm,this.tender);
      this.tenderService.edit(this.tender._id, { tender: this.tender }).subscribe(
        res => {
          this.tender = res.tender;
          this.router.navigate(['/tender', this.tender._id, 'detail']);
        },
        err => this.formService.setFormGroupErrors(this.editForm, err)
      );
    }
  }

  reset() {
    this.router.navigate(['/tender', this.tender._id, 'detail']);
  }

  getTender() {
    return this.route.data.
    flatMap(
      res => { 
        const t = res.tender.tender;
        this.tender = {
          _id: t._id,
          title: t.title,
          category: t.category._id,
          description: t.description,
          workDate: new Date(t.workDate),
          validityStart: new Date(t.validityStart),
          validityEnd: new Date(t.validityEnd),
        };
        this.formService.setFormGroupValues(this.editForm, this.tender);
        return this.categoryService
        .findAll({
          sortBy: 'title',
          sortDir: 'asc'
        })
        .map(res => this.categories = res.categories)
        .catch(err => { throw err; });
      })
      .catch(err => { throw err; });
  }
}
