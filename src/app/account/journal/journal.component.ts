import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.scss']
})
export class JournalComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
