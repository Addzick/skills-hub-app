// Angular stuff
import { Component, OnInit } from '@angular/core';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { ArticleService } from '../article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  providers: [ArticleService]
})
export class ArticleListComponent implements OnInit {
  articles: Array<any> = [];
  error: any = {};

  // Constructor
  constructor(
    private service: ArticleService,
    private auth: AuthService,
    private toastr: ToastsManager) { }

  ngOnInit() {
    // On récupére la liste des articles
    this.service.getAll().subscribe(
      res => {
        const result = res.json();
        if (result) { this.articles = result.articles; }
      },
      error => this.error = error.json().error
    );
  }
}
