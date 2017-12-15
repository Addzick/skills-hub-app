// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Resolver
import { RatingResolver } from './rating-resolver.service';

// Rating components
import { RatingComponent } from './rating.component';
import { RatingCreateComponent } from './create/rating-create.component';
import { RatingDetailComponent } from './detail/rating-detail.component';
import { RatingEditComponent } from './edit/rating-edit.component';

// Routing
import { routes } from './rating.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    RatingComponent,
    RatingCreateComponent,
    RatingDetailComponent,
    RatingEditComponent,
  ],
  providers: [
    RatingResolver
  ],
  exports: [
    RatingComponent,
    RatingCreateComponent,
    RatingDetailComponent,
    RatingEditComponent,
  ]
})
export class RatingModule { }
