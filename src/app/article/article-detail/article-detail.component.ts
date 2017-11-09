// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { ArticleService } from '../article.service';


@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss'],
})
export class ArticleDetailComponent implements OnInit {
  public article: any = {};
  public error: any = {};
  private sub: any;

  constructor(
    private service: ArticleService,
    private auth: AuthService,
    private toastr: ToastsManager,
    private router: Router,
    private route: ActivatedRoute) {

     }

  ngOnInit() {
    // Retreive the prefetched article
    this.route.data.subscribe(
      data => {
        this.article = data.article.json().article;
      }
    );
  }
}
