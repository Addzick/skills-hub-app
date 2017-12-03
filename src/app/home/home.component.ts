// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
// Rxjs stuff
import { Observable } from 'rxjs/Observable';
// Core services
import { AuthService } from '../core/auth.service';

//Shared services
import { CategoryService } from '../shared/services/category.service';
import { EventService, EventQuery } from '../shared/services/event.service';
import { RatingService, RatingQuery } from '../shared/services/rating.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public categories: Array<any> = [];
  public events: Array<any> = [];
  public ratings: Array<any> = [];
  
  public eventQuery: EventQuery = {
    sort: { updatedAt : 'desc'},
    page: 1,
    size: 5,
    types: [
      'article_published',
      'article_commented',
      'article_liked',
      'tender_published',
      'tender_commented',
      'tender_liked',
      'proposition_published',
      'proposition_accepted',
      'proposition_commented',
      'proposition_liked'
    ]
  };
  public ratingQuery: RatingQuery = {
    sort: { updatedAt : 'desc'},
    page: 1,
    size: 5
  };

  private categorySub: any;
  private eventSub: any;
  private ratingSub: any;

  constructor(
    private auth: AuthService,
    private categoryService : CategoryService,
    private eventService: EventService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    this.categorySub = this.getTopCategories().subscribe();
    this.eventSub = this.getLastEvents().subscribe();
    this.ratingSub = this.getLastRatings().subscribe();
  }

  ngOnDestroy() {
    this.categorySub.unsubscribe();
    this.eventSub.unsubscribe();
    this.ratingSub.unsubscribe();
  } 

  getTopCategories(){
    return this.categoryService
    .findAll()
    .map(
      (res) => {
        this.categories = res.categories;
      })
     .catch((error) => {
        throw error;
      });
  }

  getLastRatings() {
    return this.ratingService
    .findAll(this.ratingQuery)
    .map(
      (res) => {
        this.ratings = res.ratings;
      })
     .catch((error) => {
        throw error;
      });
  }

  getLastEvents() {
    return this.eventService
    .findAll(this.eventQuery)
    .map(
      (res) => {
        this.events = res.events;
      })
     .catch((error) => {
        throw error;
      });
  }
}
