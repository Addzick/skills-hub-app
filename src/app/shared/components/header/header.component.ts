// Angular stuff
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  @Input() image: string;
  @Input() bgcolor: string;
  
  constructor() { }

  ngOnInit() {
  }

}
