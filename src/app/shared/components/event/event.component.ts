// Angular stuff
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Shared services
import { CommentService } from '../../services/comment.service';
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event;

  public canLike = false;
  public isPublication = false;  
  public text: string;
  public isEdit = false;

  private source: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private commentService: CommentService,
    private likeService: LikeService) {}
  
  ngOnInit() {
    this.setSource();
  }
  
  comment(){
    if(!this.isPublication || !this.text || this.text == '') { return; }
    this.commentService.comment({ source: this.source, comment: this.text })
    .subscribe(
      res => { 
        this.text = '';
        this.isEdit = false;
      },
      err => console.error(err)
    );
  }

  like() {
    this.likeService.like({ source: this.source })
    .subscribe(
      res => { },
      err => console.error(err)
    );
  }
  
  unlike() {
    this.router.navigate(['/', this.source.kind, this.source.item._id, 'detail'], { fragment: 'likes'});
  }

  setEdit() {
    this.isEdit = !this.isEdit;
  }

  setSource() {
    if(!this.event.source || typeof this.event.source == undefined) { return; }

    switch(this.event.source.kind) {
      case 'comment': 
      case 'like': {
        this.source = this.event.source.item.source;
        break;
      }
      default: {
        this.source = this.event.source;
        break;
      }
    }
    this.isPublication = this.source && this.source.kind != 'user';
    this.canLike = this.isPublication && !this.source.item.myLike;
  }
}
