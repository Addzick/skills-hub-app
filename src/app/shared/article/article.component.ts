// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Component initialization
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {
  @Input() article: any;
  @Input() mode: string;
  
  constructor() {}

  ngOnInit() {    
  }
}