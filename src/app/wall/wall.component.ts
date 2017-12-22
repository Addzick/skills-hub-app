// Angular modules
import { Component, OnInit } from '@angular/core';
// Skills-hub queries
import { EventQuery } from '../shared/services/event.service';

@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  public eventQuery: EventQuery = {
    types: [
      'user_registered',
      'article_published',
      'article_commented',
      'article_liked',
      'tender_published',
      'tender_commented',
      'tender_liked',
      'proposition_published',
      'proposition_accepted',
      'proposition_rejected',
      'proposition_commented',
      'proposition_liked',
      'rating_published',
      'rating_commented',
      'rating_liked'
    ],
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 10
  };

  constructor() { }

  ngOnInit() {
  }
}
