// Angular stuff
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

// Skills-hub components
import { ExtendInputComponent } from '../../shared/extend-input/extend-input.component';

// Skills-hub services
import { LayoutService } from '../../shared/layout.service';

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.scss']
})
export class SignComponent implements OnInit {
  public activeTab: String = 'ms-login-tab';

  constructor(
    private layout: LayoutService,
    private route: ActivatedRoute,
    private router: Router) {
      const tab = this.route.snapshot.data['activeTab'];
      if (tab) { this.activeTab = tab; }
     }

     ngOnInit() {
      this.layout.hideHeader();
      this.layout.hideFooter();
      this.layout.hideMenu();
    }

}
