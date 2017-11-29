// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Shared services

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input() events: Array<any>;
  
  constructor() { }

  ngOnInit() {
  }
  
}
