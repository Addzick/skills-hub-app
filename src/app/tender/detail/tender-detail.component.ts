// Angular stuff
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { TenderService } from '../../shared/services/tender.service';
import { LikeService } from '../../shared/services/like.service';

@Component({
  selector: 'app-tender-detail',
  templateUrl: './tender-detail.component.html',
  styleUrls: ['./tender-detail.component.scss']
})
export class TenderDetailComponent implements OnInit, OnDestroy {
  public tender; 
  private tenderSub: any;

  private fragment: string;
  private fragmentSub: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private tenderService: TenderService,
    private likeService: LikeService
    ) { }

  ngOnInit() {
    this.tenderSub =  this.getArticle().subscribe();
    this.fragmentSub = this.route.fragment.subscribe(fragment => this.fragment = fragment);
  }

  ngOnDestroy() {
    if(this.tenderSub) { this.tenderSub.unsubscribe(); }
    if(this.fragmentSub) { this.fragmentSub.unsubscribe(); }
  }

  getArticle() {    
    return this.route.params.flatMap(params => {
      return this.tenderService
      .findOne(params['tender'])
      .map(
        res => this.tender = res.tender,
        err => console.error(err));
   });
  }
  
  onNotify(event: any): void{
    if(this.tenderSub) { this.tenderSub.unsubscribe(); }
    this.tenderSub =  this.getArticle().subscribe();
  }

  setFragment(fragment: string){
    this.fragment = fragment;
  }

  like(){
    this.likeService.like({ source: { item: this.tender, kind: 'tender' }})
    .subscribe(
      res => {
        this.tender.myLike = res.like;
        this.tender.nbLikes ++;
      },
      err => console.error(err));
  }

  unlike() {
    this.likeService.unlike(this.tender.myLike._id)
    .subscribe(
      res => {
        this.tender.myLike = undefined;
        this.tender.nbLikes --;
      },
      err => console.error(err));
  }
}
