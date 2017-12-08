// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

// 3rd parties modules
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';

// ToastR options
import { CustomToastOption } from './toastr-options';

// Skills-Hub Core module
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

// Skills hub preloads components component
import { SkillsHubComponent } from './skills-hub.component';

// Routings
import { routes } from './skills-hub.routing';

// Module instanciation
@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    ToastModule.forRoot(),
    CoreModule.forRoot(),
    SharedModule,
  ],
  declarations: [
    SkillsHubComponent
  ],
  providers: [ 
    { 
      provide: ToastOptions, 
      useClass: CustomToastOption
    },
  ],
  exports: [ ],
  bootstrap: [SkillsHubComponent]
})
export class SkillsHubModule { }
