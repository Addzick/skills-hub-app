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
import { ArticleService } from '../../shared/services/article.service';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.scss']
})
export class ArticleCreateComponent implements OnInit {
  public config: any = {
    "editable": true,
    "spellcheck": false,
    "height": "100%",
    "minHeight": "400px",
    "width":"100%",
    "minWidth":"300px",
    "translate": "no",
    "toolbar": []
  }
  public createForm: FormGroup;

  constructor(
    private router: Router,
    private formService: FormService,
    private articleService: ArticleService) {

    this.createForm = this.formService.createFormGroup({ 
      'title' : ['', Validators.required],
      'description' : [''],
      'body': ['']
    }); 
  }

  ngOnInit() {
  }

  submit() {
    if (this.createForm.valid) {
      this.articleService.create({ article: this.createForm.value}).subscribe(
        res => this.router.navigate(['/article', res.article._id, 'detail']),
        err => this.formService.setFormGroupErrors(this.createForm, err)
      );
    }
  }

  sanitize(body: string){
  }

  reset() {
    this.createForm.reset();
  }

}
