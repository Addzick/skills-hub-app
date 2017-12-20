// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { ArticleService } from '../../shared/services/article.service';
import { LikeService } from '../../shared/services/like.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  public article: any = { title: '', description: '', body: '', author: { _id: '' } }; 
  private articleSub: any;

  private fragment: string;
  private fragmentSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private articleService: ArticleService,
    private likeService: LikeService
    ) { }

  ngOnInit() {
    this.articleSub =  this.getArticle().subscribe();
    this.fragmentSub = this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }

  ngOnDestroy() {
    if(this.articleSub) { this.articleSub.unsubscribe(); }
    if(this.fragmentSub) { this.fragmentSub.unsubscribe(); }
  }

  getArticle() {    
    return this.route.params.flatMap(params => {
      return this.articleService
      .findOne(params['article'])
      .map(
        res => this.article = res.article,
        err => console.error(err));
   });
  }
  
  onNotify(){
    if(this.articleSub) { this.articleSub.unsubscribe(); }
    this.articleSub =  this.getArticle().subscribe();
  }

  setFragment(fragment: string){
    this.fragment = fragment;
  }

  like(){
    this.likeService.like({ source: { item: this.article, kind: 'article' }})
    .subscribe(
      res => {
        this.article.myLike = res.like;
        this.article.nbLikes ++;
      },
      err => console.error(err));
  }

  unlike() {
    this.likeService.unlike(this.article.myLike._id)
    .subscribe(
      res => {
        this.article.myLike = undefined;
        this.article.nbLikes --;
      },
      err => console.error(err));
  }
}
