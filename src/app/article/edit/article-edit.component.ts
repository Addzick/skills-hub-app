// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { FormService } from '../../shared/services/form.service';
import { ArticleService } from '../../shared/services/article.service';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/components/extend-input/extend-input.component';

@Component({
  selector: 'app-article-edit',
  templateUrl: './article-edit.component.html',
  styleUrls: ['./article-edit.component.scss']
})
export class ArticleEditComponent implements OnInit, OnDestroy {
  public editForm: FormGroup;  
  public article: any = { title: '', description: '', body: '', tags:[''] };
  
  private articleSub: any;

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
    private route: ActivatedRoute,
    private formService: FormService,
    private articleService: ArticleService
    ) {
      this.editForm = this.formService.createFormGroup({ 
        'title' : ['', Validators.required],
        'description' : [''],
        'body': [''],
        'tags': [[]]
      });
    }

  ngOnInit() {
    this.articleSub =  this.route.data.
    subscribe(
      res => { 
        this.article = res.article.article; 
        this.formService.setFormGroupValues(this.editForm, this.article);
      },
      err => console.error(err)
    );
  }

  ngOnDestroy() {
    if(this.articleSub) { this.articleSub.unsubscribe(); }
  }

  submit() {
    if (this.editForm.valid) {
      this.formService.getFormGroupValues(this.editForm,this.article);
      this.articleService.edit(this.article._id, { article: this.article }).subscribe(
        res => {
          this.article = res.article;
          this.router.navigate(['/article', this.article._id, 'detail']);
        },
        err => this.formService.setFormGroupErrors(this.editForm, err)
      );
    }
  }
  reset() {
    this.router.navigate(['/article', this.article._id, 'detail']);
  }

  sanitize(body: string){
  }
}
