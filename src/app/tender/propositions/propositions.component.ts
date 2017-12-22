// Angular stuff
import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// RxJs stuff
import { Observable } from 'rxjs/Observable';
import '../../core/rxjs-extensions';
// Skills-hub services
import { PropositionService, PropositionQuery } from '../../shared/services/proposition.service';

@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.scss']
})
export class PropositionsComponent implements OnInit {
  @Input() source: any;
  @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  public propositions: Array<any>;
  public total: number;
  public query: PropositionQuery = {
    sortBy: 'updatedAt',
    sortDir: 'desc',
    size: 5
  };
  public hasPrec = false;
  public hasNext = false;
  public hasPropositions = false;
  private propositionsSub: any;
  
  constructor(private propositionService: PropositionService) {
  }

  ngOnInit() {
    this.getPropositions();
  }

  ngOnDestroy() {
    if(this.propositionsSub) { this.propositionsSub.unsubscribe(); }
  }

  getPropositions() {
    if(this.propositionsSub) { this.propositionsSub.unsubscribe(); }
    if(!this.source || typeof this.source == 'undefined' || !this.source._id || typeof this.source._id == 'undefined'){
      return;
    }
    this.query['source'] = this.source['_id'];
    this.propositionsSub = this.propositionService
    .findAll(this.query)
    .subscribe(
      res => {
        this.propositions = res.propositions;
        this.total = res.count;
        this.hasPropositions = this.total > 0;
        this.hasPrec = this.query.page > 1;
        this.hasNext = this.query.page * this.query.size < this.total;
      },
      err => console.error(err)
    );
  }

  navigate(page){
    this.query['page'] = page;
    this.getPropositions();
  }

}
