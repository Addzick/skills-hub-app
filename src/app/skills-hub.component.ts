// Angular modules
import { Component, OnInit, ViewContainerRef } from '@angular/core';

// 3rd parties
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-root',
  templateUrl: './skills-hub.component.html',
  styleUrls: ['./skills-hub.component.scss']
})
export class SkillsHubComponent {
  title = 'Skills Hub';

  constructor(
    private toastr: ToastsManager,
    private vcr: ViewContainerRef) {
      this.toastr.setRootViewContainerRef(vcr);
   }
}
