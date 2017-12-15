// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Resolver
import { PropositionResolver } from './proposition-resolver.service';

// Proposition components
import { PropositionComponent } from './proposition.component';
import { PropositionCreateComponent } from './create/proposition-create.component';
import { PropositionDetailComponent } from './detail/proposition-detail.component';
import { PropositionEditComponent } from './edit/proposition-edit.component';

// Routing
import { routes } from './proposition.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    PropositionComponent,
    PropositionCreateComponent,
    PropositionDetailComponent,
    PropositionEditComponent,
  ],
  providers: [
    PropositionResolver
  ],
  exports: [
    PropositionComponent,
    PropositionCreateComponent,
    PropositionDetailComponent,
    PropositionEditComponent,
  ]
})
export class PropositionModule { }
