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
        source: this.event.source
      })
      .subscribe(
        res => {
          this.text = '';
        }
      );
    }
  }

  like(){
    this.likeService.like({
      source: this.event.source
    })
    .subscribe(
      res => {
        this.text = '';
      }
    );
  }
}
