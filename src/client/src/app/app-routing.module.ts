import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {UsersIndexComponent} from "./module/pages/users/index/users-index.component";
import {ProjectsIndexComponent} from './module/pages/projects/index/projects-index.component';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {TaskTypesIndexComponent} from '@app/module/pages/task-types/index/task-types-index.component';

const routes: Routes = [
    {path: 'users', component: UsersIndexComponent},
    {path: 'projects', component: ProjectsIndexComponent},
    {path: 'tasks', component: TasksIndexComponent},
    {path: 'task-types', component: TaskTypesIndexComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
