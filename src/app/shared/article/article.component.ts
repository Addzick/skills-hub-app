// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Skills-hub services
import { AuthService } from '../../core/auth.service';
import { ArticleService } from '../services/article.service';

// Component initialization
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
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
    // Retrieve the prefetched article
    this.route.data.subscribe(
      data => {
        this.article = data.article.json().article;
      }
    );
  }
}
