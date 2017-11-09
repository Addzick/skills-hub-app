// Angular stuff
import { Component, OnInit } from '@angular/core';

// Skills-hub services
import { LayoutService } from '../shared/layout.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private layout: LayoutService) { }

  ngOnInit() {
    this.layout.showHeader();
    this.layout.showFooter();
    this.layout.showMenu();
  }

}
