// Angular modules
import { Routes } from '@angular/router';

// Core module dependencies
import { AuthGuardLogin } from '../core/auth-guard-login.service';
// Resolver
import { TaskResolver } from './task-resolver.service';

// Task components
import { TaskComponent } from './task.component';
import { TaskCreateComponent } from './create/task-create.component';
import { TaskDetailComponent } from './detail/task-detail.component';
import { TaskEditComponent } from './edit/task-edit.component';

export const routes: Routes = [
    {
        path: '',
        component: TaskComponent,
        children: [
            {
                path: 'create',
                component: TaskCreateComponent,
                canActivate: [AuthGuardLogin]
            },
            {
                path: ':task/detail',
                resolve: { task: TaskResolver },
                component: TaskDetailComponent,
            },
            {
                path: ':task/edit',
                resolve: { task: TaskResolver },
                component: TaskEditComponent,
                canActivate: [AuthGuardLogin]
            }
        ]
    }
]
