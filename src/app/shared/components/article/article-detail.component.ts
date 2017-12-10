// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Skills-hub services
import { AuthService } from '../../../core/auth.service';
import { FormService } from '../../services/form.service';
import { ArticleService } from '../../services/article.service';
import { CommentService } from '../../services/comment.service';
import { LikeService } from '../../services/like.service';

// Skills-hub components
import { ExtendInputComponent } from '../extend-input/extend-input.component';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
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
  public editForm: FormGroup;  
  public article: any = { title: '', description: '', body: '' }; 
  public isEdit: boolean = true;
  public isNew: boolean = true;
  public comments: any;
  public likes: any;
  
  private articleSub: any;
  private commentsSub: any;
  private likesSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private auth: AuthService,
    private formService: FormService,
    private articleService: ArticleService,
    private commentService: CommentService,
    private likeService: LikeService
    ) {
      this.editForm = this.formService.createFormGroup({ 
        'title' : ['', Validators.required],
        'description' : [''],
        'body': ['']
      });
    }

  ngOnInit() {
    this.articleSub =  this.route.data.
    subscribe(data => {
      const result = data.article
      if(result) {
        this.article = result.article;
        this.isNew = false;
        this.isEdit = false;
        this.formService.setFormGroupValues(this.editForm, this.article);
        this.commentsSub =  this.commentService
        .findAll({ source: this.article._id, page: 1, size:10, sort: { updatedAt: 'desc' } })
        .map((res) => this.comments = res.comments).subscribe();
        this.likesSub =  this.likeService
        .findAll({ source: this.article._id, page: 1, size:10, sort: { updatedAt: 'desc' } })
        .map((res) => this.likes = res.likes).subscribe();
      }
    });
  }

  ngOnDestroy() {
    if(this.articleSub) { this.articleSub.unsubscribe(); }
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
    if(this.likesSub) { this.likesSub.unsubscribe(); }
  }

  submit() {
    if (this.editForm.valid) {
      let obs = this.isNew 
      ? this.articleService.create({ article: this.editForm.value}) 
      : this.articleService.edit(this.article._id, { article: this.editForm.value});
      obs.subscribe(
        res => {
          this.article = res.article;
          this.isNew = false;
          this.isEdit = false;
          this.formService.setFormGroupValues(this.editForm, this.article);
        },
        err => this.formService.setFormGroupErrors(this.editForm, err)
      );
    }
  }

  setEdit() {
    this.isEdit = !this.isEdit;
  }

  canEdit() {
    return this.isNew || this.auth.getCurrentUserName() == this.article.author.email;
  }

  sanitize(body: string){
  }
}
