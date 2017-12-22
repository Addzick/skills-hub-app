// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Resolver
import { TenderResolver } from './tender-resolver.service';

// Tender components
import { TenderComponent } from './tender.component';
import { TenderCreateComponent } from './create/tender-create.component';
import { TenderEditComponent } from './edit/tender-edit.component';
import { TenderDetailComponent } from './detail/tender-detail.component';
import { PropositionsComponent } from './propositions/propositions.component';
import { TasksComponent } from './tasks/tasks.component';

// Routing
import { routes } from './tender.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TenderComponent,
    TenderCreateComponent,
    TenderEditComponent,
    TenderDetailComponent,
    PropositionsComponent,
    TasksComponent,
  ],
  exports: [
    TenderComponent,
    TenderCreateComponent,
    TenderEditComponent,
    TenderDetailComponent,
    PropositionsComponent,
    TasksComponent,
  ],
  providers:[
    TenderResolver,
  ]
})
export class TenderModule { }
