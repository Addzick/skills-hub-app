// Angular stuff
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Skills-hub services
import { LikeService, LikeQuery } from '../../services/like.service';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.scss']
})
export class LikesComponent implements OnInit, OnDestroy {
  @Input() kind; 
  @Input() item; 
  @Input() mylike; 

  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  
  public likes: Array<any>;
  public total: number;
  public query: LikeQuery = {
    sortBy: 'updatedAt',
    sortDir: 'desc',
    size: 5
  };
  
  public hasNext = false;
  public hasPrec = false;
  public hasLikes= false;
  
  private likesSub: any;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
    this.getLikes();
  }

  ngOnDestroy() {
    if(this.likesSub) { this.likesSub.unsubscribe(); }
  }

  getLikes() {
    if(this.likesSub) { this.likesSub.unsubscribe(); }
    if(!this.item || typeof this.item == 'undefined' || !this.item._id || typeof this.item._id == 'undefined'){
      return;
    }
    this.query['source'] = this.item['_id'];
    this.likesSub = this.likeService
    .findAll(this.query)
    .subscribe(
      res => { 
        this.likes = res.likes;
        this.total = res.count;
        this.hasLikes = this.total > 0;
        this.hasPrec = this.query.page > 1;
        this.hasNext = this.query.page * this.query.size < this.total;
      },
      err => console.error(err));
  }

  like(){
    this.likeService.like({ source: { item: this.item, kind: this.kind }})
    .subscribe(
      res => { 
        this.mylike = res.like; 
        this.notify.emit();
        this.getLikes();
      },
      err => console.error(err));
  }

  unlike() {
    this.likeService.unlike(this.mylike._id)
    .subscribe(
      res => { 
        this.mylike = undefined; 
        this.notify.emit(); 
        this.getLikes();
      },
      err => console.error(err));
  } 

  navigate(page){
    this.query['page'] = page;
    this.getLikes();
  }
}
