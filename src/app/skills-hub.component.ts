// Angular modules
import { Component, OnInit, OnDestroy, ViewContainerRef, Renderer2 } from '@angular/core';
import { Router, NavigationEnd, NavigationStart, ActivatedRoute } from '@angular/router';

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
  loading = true;

  private navigationStartSub: any;
  private navigationEndSub: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef,
    private renderer: Renderer2) {
      this.toastr.setRootViewContainerRef(vcr);
    }

    ngOnInit() {
      this.navigationStartSub = this.onNavigationStart();
      this.navigationEndSub = this.onNavigationEnd();
    }

    ngOnDestroy() {
      if(this.navigationStartSub) { this.navigationStartSub.unsubscribe(); }
      if(this.navigationEndSub) { this.navigationEndSub.unsubscribe(); }
    }

  scrollToTop() {
    try { 
      window.scrollTo({ left: 0, top: 0, behavior: 'smooth' }); 
    } catch (e) { 
      window.scrollTo(0, 0); 
    }
  }

  onNavigationEnd() {
    return this.router.events
    .filter(event => event instanceof NavigationEnd)
    .map(() => this.activatedRoute)
    .subscribe((event) => {
      setTimeout(() => {
        this.renderer.removeClass(document.getElementById('ms-slidebar'), 'open');
        this.loading = false;
        this.scrollToTop();
      }, 500); 
     });
  }

  onNavigationStart() {
    return this.router.events
    .filter(event => event instanceof NavigationStart)
    .map(() => this.activatedRoute)
    .subscribe((event) => {
      this.loading = true;
     });
  }
}
