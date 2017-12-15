// Angular stuff
import { Component, OnInit, Input } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Shared services and components
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  @Input() event: any;
  private source: any;
  public canLike = false;
  public isPublication = false;

  constructor(private likeService: LikeService) {}
  
    ngOnInit() {
      if(this.event) {
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
}
