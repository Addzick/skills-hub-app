// Angular modules
import { Component, OnInit, ViewContainerRef } from '@angular/core';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

// Core services
import { EventService } from './core/services/event.service';

@Component({
  selector: 'app-root',
  templateUrl: './skills-hub.component.html',
  styleUrls: ['./skills-hub.component.scss']
})
export class SkillsHubComponent {
  title = 'Skills Hub';
  connection;

  constructor(
    private event: EventService,
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
   }

   ngOnInit() {
    this.connection = this.event.getEvents().subscribe((event) => {
      this.toastr.info(JSON.stringify(event));
    });  
}
  
  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
