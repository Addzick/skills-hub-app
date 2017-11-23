// Angular modules
import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

// RxJs stuff
import { Observable } from 'rxjs/Observable';
import './core/rxjs-extensions';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Core services
import { AuthService } from './core/auth.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './skills-hub.component.html',
  styleUrls: ['./skills-hub.component.scss']
})
export class SkillsHubComponent implements OnInit, OnDestroy {
  title = 'Skills Hub';


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute) {}

   ngOnInit() {
    // On initialise les scripts externes
    this.initScripts();
   }

   ngOnDestroy() {}

    initScripts() {
      this.router.events
      .filter(event => event instanceof NavigationEnd)
      .map(() => this.activatedRoute)
      .subscribe((event) => {
        $.getScript('/assets/js/app.min.js');
        $.getScript('/assets/js/lead.js');
       });
    }

}
