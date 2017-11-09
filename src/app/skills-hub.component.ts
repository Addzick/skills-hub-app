// Angular modules
import { Component, ViewContainerRef, OnInit, OnDestroy } from '@angular/core';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Core services
import { AuthService } from './core/auth.service';
import { environment } from '../environments/environment.prod';

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
    private auth: AuthService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      // On définit le conteneur pour ng2-toastr
      this.toastr.setRootViewContainerRef(vcr);
   }

   ngOnInit() {
     // On s'abonne au nouveau evenements
     this.connection = this.auth.channel.subscribe((event) => {
      const email = event.user.email;
      const type = event.type;
      const createdAt = new Date(event.createdAt).toLocaleTimeString();
      this.toastr.info(`${ email } has emitted an event of type '${ type }' at ${ createdAt }`);
     });
   }

   ngOnDestroy() {
     this.connection.unsubscribe();
    }

}
