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
import { environment } from '../environments/environment.prod';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './skills-hub.component.html',
  styleUrls: ['./skills-hub.component.scss']
})
export class SkillsHubComponent implements OnInit, OnDestroy {
  title = 'Skills Hub';
  connection;
  socketUrl = environment.socketUrl;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      // On définit le conteneur pour ng2-toastr
      this.toastr.setRootViewContainerRef(vcr);
   }

   ngOnInit() {
    // On initialise les scripts externes
    this.initScripts();
    // On s'abonne au nouveau evenements
     this.initEvents();
   }

   ngOnDestroy() {
     this.connection.unsubscribe();
    }

    initEvents() {
      this.connection = this.auth.channel.subscribe((event) => {
        const email = event.user.email;
        const type = event.type;
        const createdAt = new Date(event.createdAt).toLocaleTimeString();
        this.toastr.info(`${ email } has emitted an event of type '${ type }' at ${ createdAt }`);
       });
    }

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
