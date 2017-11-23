import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tender',
  templateUrl: './tender.component.html',
  styleUrls: ['./tender.component.scss']
})
export class TenderComponent implements OnInit {
  @Input() tender:any;
  @Input() mode: string;
  
  constructor() { }

  ngOnInit() {
  }

}
