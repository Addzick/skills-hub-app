// Angular core modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

// 3rd parties modules
import { ToastModule } from 'ng2-toastr/ng2-toastr';

// Skills-Hub Core module
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';

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
    FormsModule,
    ReactiveFormsModule,
    ToastModule.forRoot(),
    RouterModule.forRoot(routes),
    CoreModule.forRoot(),
  ],
  providers: [ ],
  exports: [ ],
  bootstrap: [SkillsHubComponent]
})
export class SkillsHubModule { }
