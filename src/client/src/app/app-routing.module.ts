import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MenuItem} from "primeng/api";
import {UsersIndexComponent} from "./module-pm/pages/users/index/users-index.component";
import {ProjectsIndexComponent} from './module-pm/pages/projects/index/projects-index.component';

const routes: Routes = [
    {path: 'users', component: UsersIndexComponent},
    {path: 'projects', component: ProjectsIndexComponent},
];


export const MenuItems: MenuItem[] =
    [{
        label: "Administration",
        expanded: true,
        items: [
            {label: "Users", routerLink: "users" , icon:"pi pi-users"},
            {label: "Projects", routerLink: "projects", icon:"pi pi-folder"},
            {label: "Project Sections", icon: "pi pi-folder"}
        ]
    },
        {
            label: "Curent Project", expanded: true, items: [
                {
                    label: "Components", expanded: true, items: [
                        {label: "Plugins or addColumn-ons"},
                        {label: "Routing"},
                        {label: "Tables"},
                        {label: "Pages"},
                        {label: "Functionality"},
                    ]
                },
                {
                    label: "Resources", expanded: true, items: [
                        {label: "Documentation"},
                        {label: "Research"},
                        {label: "Nice to have"}
                    ]
                },
                {
                    label: "Tasks", expanded: true, items: [
                        {label: "Add/change components"},
                        {label: "Bugs"},
                        {label: "Issues"},
                    ]
                },
            ]
        }]
;

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
