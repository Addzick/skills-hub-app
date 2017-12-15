// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-account-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class AccountStatsComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
