// Angular stuff
import { Component, OnInit, Input } from '@angular/core';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../../core/rxjs-extensions';
// Shared services and components
import { LikeService } from '../../services/like.service';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {
  @Input() tender: any;
  
  constructor(private likeService: LikeService) {}

  ngOnInit() {
  }

  like(){
    this.likeService.like({
      source: { kind: 'tender', item: this.tender }
    })
    .subscribe(
      res => {
        this.tender.myLike = res.like;
      }
    );
  }

  unlike() {
    this.likeService.unlike(this.tender.myLike._id)
    .subscribe(
      res => {
        this.tender.myLike = undefined;
      }
    );
  }
}
