// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// 3rd parties modules
import { ToastModule } from 'ng2-toastr/ng2-toastr';

// Skills-Hub Core module
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

// Skills hub main component
import { SkillsHubComponent } from './skills-hub.component';
import { routes } from './skills-hub.routing';

// Module instanciation
@NgModule({
  declarations: [
    SkillsHubComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot(),
    SharedModule,
    CoreModule.forRoot(),
  ],
  providers: [ ],
  exports: [ ],
  bootstrap: [SkillsHubComponent]
})
export class SkillsHubModule { }
