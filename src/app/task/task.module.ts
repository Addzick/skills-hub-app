// Angular stuff
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// Skills-hub modules
import { SharedModule } from '../shared/shared.module';

// Resolver
import { TaskResolver } from './task-resolver.service';

// Task components
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './create/task-create.component';
import { TaskDetailComponent } from './detail/task-detail.component';
import { TaskEditComponent } from './edit/task-edit.component';

// Routing
import { routes } from './task.routing';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    TaskComponent,
    TaskCreateComponent,
    TaskDetailComponent,
    TaskEditComponent,
  ],
  providers: [
    TaskResolver
  ],
  exports: [
    TaskComponent,
    TaskCreateComponent,
    TaskDetailComponent,
    TaskEditComponent,
  ]
})
export class TaskModule { }
