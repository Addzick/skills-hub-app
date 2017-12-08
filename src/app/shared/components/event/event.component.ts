// Angular stuff
import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
// Core services
import { AuthService } from '../../../core/auth.service';
// Shared services and components
import { CommentService } from '../../services/comment.service';
import { LikeService } from '../../services/like.service';
import { ExtendInputComponent } from '../extend-input/extend-input.component';


@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  text: string;
  isCommentFormVisible = false;

  constructor(
    private auth: AuthService,
    private commentService: CommentService,
    private likeService: LikeService) { }

  ngOnInit() {
  }

  isEventFromCurrentUser(event) {
    return event.author.getCurrentUserName == this.auth.getCurrentUserName();
  }

  comment(){
    if(this.text){
      this.commentService.comment({
        comment: this.text,
        source: this.getEventSource()
      })
      .subscribe(
        res => {
          this.text = '';
          this.isCommentFormVisible = false;
        }
      );
    }
  }

  like(){
    this.likeService.like({
      source: this.getEventSource()
    })
    .subscribe(
      res => {
        this.text = '';
      }
    );
  }

  setCommentFormVisibility(){
    this.isCommentFormVisible = !this.isCommentFormVisible;
  }

  private getEventSource(){
    switch(this.event.source.kind){
      case 'comment': 
      case 'like': return this.event.source.item.source;
      default: return this.event.source;
    }
  }
}
