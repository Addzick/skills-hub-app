// Angular modules
import { Component, ViewContainerRef, OnInit, OnDestroy, Renderer2 } from '@angular/core';
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
export class SkillsHubComponent implements OnInit {
  title = 'Skills Hub';


  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private renderer: Renderer2) {
      // On définit le conteneur pour ng2-toastr
      this.toastr.setRootViewContainerRef(vcr);
      this.toastr.onClickToast().subscribe( toast => {            
        window.scrollTo(0,0);
      });
    }

   ngOnInit() {
    this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .subscribe((event) => {
      this.renderer.removeClass(document.getElementById('ms-slidebar'), 'open');
     });
   }

  scrollToTop() {
    window.scrollTo(0,0);
  }
}
