// Angular stuff
import { Component, OnInit } from '@angular/core';

// Skills-hub services
import { LayoutService } from '../shared/layout.service';
import { ArticleService } from '../shared/article.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  articles: Array<any> = [];

  constructor(
    private layout: LayoutService,
    private articleService: ArticleService) { }

  ngOnInit() {
    this.layout.showHeader();
    this.layout.showFooter();
    this.layout.showMenu();

        // On récupére la liste des articles
        this.articleService.getAll({
          title: '',
          categories: [],
          tags: [],
          page: 1,
          size: 5 }).subscribe(
          res => {
            const result = res.json();
            if (result) { this.articles = result.articles; }
          },
          error => console.error(error.json())
        );
  }
}
