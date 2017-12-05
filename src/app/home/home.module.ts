// Angular stuff
import { NgModule} from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Module components
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { SearchComponent } from './search/search.component';
import { HelpComponent } from './help/help.component';

// Routing
import { routes } from './home-routing';

// Module instanciation
@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    HelpComponent,
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SearchComponent,
    HelpComponent,
  ]
})
export class HomeModule { }

