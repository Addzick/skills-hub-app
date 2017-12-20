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
export class ArticleCreateComponent implements OnInit, OnDestroy {
  public createForm: FormGroup;
  public article: any = { title: '', description: '', body: '', tags:[''] };
  public tags = [];

  private tagsSub: any;

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

  constructor(
    private router: Router,
    private formService: FormService,
    private articleService: ArticleService) {

    this.createForm = this.formService.createFormGroup({ 
      'title' : ['', Validators.required],
      'description' : [''],
      'body': [''],
      'tags': ['']
    });
  }

  ngOnInit() {
    this.tagsSub = this.articleService.getTags().subscribe(
      res => this.tags = res.tags,
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    if(this.tagsSub) { this.tagsSub.unsubscribe(); }
  }

  submit() {
    if (this.createForm.valid) {
      this.article = this.formService.getFormGroupValues(this.createForm,this.article);
      this.articleService.create({ article: this.article }).subscribe(
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
