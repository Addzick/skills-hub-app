// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  public article: any = {};
  public error: any = {};

  constructor(
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    this.route.data.subscribe(
      data => {
        this.article = data.article.item;
      }
    );
  }

}
