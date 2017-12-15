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

declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public categories: Array<any> = [];
  public events: Array<any> = [];
  public ratings: Array<any> = [];
  
  public eventQuery: EventQuery = {
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 5,
    types: [
      'proposition_accepted'
    ]
  };
  public ratingQuery: RatingQuery = {
    startValue: 4,
    endValue: 5,
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 5
  };

  constructor(
    public auth: AuthService,
    private categoryService : CategoryService,
    private eventService: EventService,
    private ratingService: RatingService
  ) { }

  ngOnInit() {
    this.getTopCategories()
    this.getLastAcceptedPropositions()
    this.getLastRatings()
  }

  getTopCategories(){
    return this.categoryService
    .findAll()
    .subscribe(
      res => this.categories = res.categories,
      err => console.error(err));
  }

  getLastRatings() {
    return this.ratingService
    .findAll(this.ratingQuery)
    .subscribe(
      res => this.ratings = res.ratings,
      err => console.error(err));
  }

  getLastAcceptedPropositions() {
    return this.eventService
    .findAll(this.eventQuery)
    .subscribe(
      res => this.events = res.events,
      err => console.error(err));
  }
}
