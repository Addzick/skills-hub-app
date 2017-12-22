// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

// Rxjs stuff
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-account-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class AccountJournalComponent implements OnInit {
  @Input() events: Array<any>;

  constructor() { }

  ngOnInit() {
  }
}
