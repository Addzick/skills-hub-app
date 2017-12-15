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
  @Input() kind: string; 
  @Input() item: any; 
  @Input() mylike: any; 
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();
  
  public likes: Array<any>;
  public query: LikeQuery = {
    source: '',
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 5
  };
  
  private likesSub: any;

  constructor(private likeService: LikeService) { }

  ngOnInit() {
    this.likesSub = this.getLikes().subscribe();
  }

  ngOnDestroy() {
    if(this.likesSub) { this.likesSub.unsubscribe(); }
  }

  refresh(){
    if(this.likesSub) { this.likesSub.unsubscribe(); }
    this.likesSub = this.getLikes().subscribe();
    this.notify.emit();
  }

  getLikes() {
    if(this.item) {
      this.query.source = this.item._id;
      return this.likeService
      .findAll(this.query)
      .map(res => this.likes = res.likes)
      .catch((error) => { throw error; });
    }
  }

  like(){
    this.likeService.like({ source: { item: this.item, kind: this.kind }})
    .subscribe(
      res => { this.mylike = res.like; this.refresh(); },
      err => console.error(err));
  }

  unlike() {
    this.likeService.unlike(this.mylike._id)
    .subscribe(
      res => { this.mylike = undefined; this.refresh(); },
      err => console.error(err));
  } 
}
