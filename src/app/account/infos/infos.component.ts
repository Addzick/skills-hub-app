import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-infos',
  templateUrl: './infos.component.html',
  styleUrls: ['./infos.component.scss']
})
export class InfosComponent implements OnInit {
  @Input() user: any;

  constructor() { }

  ngOnInit() {
  }

}
