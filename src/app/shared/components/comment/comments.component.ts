// Angular stuff
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Skills-hub services
import { CommentService, CommentQuery } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit, OnDestroy {
  @Input() kind: string; 
  @Input() item: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  public text: string;
  public comments: Array<any>;
  public total: number;
  public query: CommentQuery = {
    source: '',
    sortBy: 'updatedAt',
    sortDir: 'desc',
    page: 1,
    size: 5
  };
  public hasPrec = false;
  public hasNext = false;
  public hasComments = false;

  private commentsSub: any;

  constructor(private commentService: CommentService) { }

  ngOnInit() {
    this.commentsSub = this.getComments().subscribe();
  }

  ngOnDestroy() {
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
  }

  refresh(){
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
    this.commentsSub = this.getComments().subscribe();
    this.notify.emit();
    this.text = '';
  }

  getComments() {
    if(this.item) {
      this.query.source = this.item._id;
      return this.commentService
      .findAll(this.query)
      .map(res => {
        this.comments = res.comments;
        this.total = res.count;
        this.hasComments = this.total > 0;
        this.hasPrec = this.query.page > 1;
        this.hasNext = this.query.page * this.query.size < this.total;
      })
      .catch((error) => { throw error; });
    }
  }

  comment(){
    if(this.text){
      this.commentService.comment({ 
        source: { kind: this.kind, item: this.item },
        comment: this.text,
      })
      .subscribe(
        res => this.refresh(),
        err => console.error(err));
    }
  }

  uncomment(id) {
    this.commentService.uncomment(id)
    .subscribe(
      res => this.refresh(),
      err => console.error(err));
  } 

  navigate(page){
    this.query.page = page;
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
    this.commentsSub = this.getComments().subscribe();
  }
}
