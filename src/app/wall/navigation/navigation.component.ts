// Angular modules
import { Component, OnInit, OnDestroy } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Shared services
import { CategoryService } from '../../shared/services/category.service';
import { ArticleService, ArticleQuery } from '../../shared/services/article.service';
import { TenderService, TenderQuery } from '../../shared/services/tender.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit, OnDestroy {
  public tags: Array<any>;
  public categories: Array<any>;
  public articles: Array<any>;
  public tenders: Array<any>;
  
  private tagsSub: any;
  private categoriesSub: any;
  private articlesSub: any;
  private tendersSub: any;

  constructor(
    private categoryService: CategoryService,
    private articleService: ArticleService,
    private tenderService: TenderService,
  ) { }

  ngOnInit() {
      this.tagsSub = this.getTags().subscribe();
      this.categoriesSub = this.getCategories().subscribe();
      this.articlesSub = this.getArticles().subscribe();
      this.tendersSub = this.getTenders().subscribe();
  }

  ngOnDestroy() {
    if(this.tagsSub) { this.tagsSub.unsubscribe(); }
    if(this.categoriesSub) { this.categoriesSub.unsubscribe(); }
    if(this.articlesSub) { this.articlesSub.unsubscribe(); }
    if(this.tendersSub) { this.tendersSub.unsubscribe(); }
  }

  getTags() {
    return this.articleService
    .getTags()
    .map(res => this.tags = res.tags)
    .catch(err => { throw err; });
  }

  getCategories() {
    return this.categoryService
    .findAll({
      sortBy: 'title',
      sortDir: 'asc'
    })
    .map(res => this.categories = res.categories)
    .catch(err => { throw err; });
  }

  getArticles() {
    return this.articleService
    .findAll({
      page: 1,
      size: 5,
      sortBy: 'createdAt',
      sortDir: 'desc'
    })
    .map(res => this.articles = res.items)
    .catch(err => { throw err; });
  }

  getTenders() {
    return this.tenderService
    .findAll({
      page: 1,
      size: 5,
      sortBy: 'createdAt',
      sortDir: 'desc'
    })
    .map(res => this.tenders = res.items)
    .catch(err => { throw err; });
  }
}
