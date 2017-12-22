// Angular stuff
import { Component, OnInit, AfterViewInit, OnDestroy, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Skills-hub services
import { CommentService, CommentQuery } from '../../services/comment.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss'],
  providers: [CommentService]
})
export class CommentsComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() kind: string; 
  @Input() item: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  @ViewChild('comment') control: ElementRef;
  
  public comments: Array<any>;
  public total: number;
  public query: CommentQuery = {
    sortBy: 'updatedAt',
    sortDir: 'desc',
    size: 5
  };
  public hasPrec = false;
  public hasNext = false;
  public hasComments = false;
  private commentsSub: any;
  
  public text: string;

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.getComments();
  }

  ngAfterViewInit() {
    this.control.nativeElement.focus();
  }

  ngOnDestroy() {
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
  }

  getComments() {
    if(this.commentsSub) { this.commentsSub.unsubscribe(); }
    if(!this.item || typeof this.item == 'undefined' || !this.item._id || typeof this.item._id == 'undefined'){
      return;
    }
    this.query['source'] = this.item['_id'];
    this.commentsSub = this.commentService
    .findAll(this.query)
    .subscribe(
      res => {
        this.comments = res.comments;
        this.total = res.count;
        this.hasComments = this.total > 0;
        this.hasPrec = this.query.page > 1;
        this.hasNext = this.query.page * this.query.size < this.total;
      },
      err => console.error(err)
    );
  }

  post(){
    console.log('submit');
    if(this.text){
      this.commentService.comment({ 
        source: { kind: this.kind, item: this.item },
        comment: this.text,
      })
      .subscribe(
        res => {
          this.notify.emit();
          this.getComments();
          this.text = '';
        },
        err => console.error(err));
    }
  }

  delete(id) {
    this.commentService.uncomment(id)
    .subscribe(
      res => {
        this.notify.emit();
        this.getComments();
      },
      err => console.error(err));
  } 

  navigate(page){
    this.query['page'] = page;
    this.getComments();
  }
}
