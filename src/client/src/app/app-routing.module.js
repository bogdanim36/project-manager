var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UsersIndexComponent } from "./module-pm/pages/users/index/users-index.component";
import { ProjectsListComponent } from "./module-pm/pages/projects/list/projects-list.component";
var routes = [
    { path: 'users', component: UsersIndexComponent },
    { path: 'projects', component: ProjectsListComponent },
];
export var MenuItems = [{
        label: "Administration",
        expanded: true,
        items: [
            { label: "Users", routerLink: "users", icon: "pi pi-users" },
            { label: "Projects", routerLink: "projects", icon: "pi pi-folder" },
            { label: "Project Sections", icon: "pi pi-folder" }
        ]
    },
    {
        label: "Curent Project", expanded: false, items: [
            {
                label: "Components", expanded: true, items: [
                    { label: "Plugins or addColumn-ons" },
                    { label: "Routing" },
                    { label: "Tables" },
                    { label: "Pages" },
                    { label: "Functionalities" },
                ]
            },
            {
                label: "Resources", expanded: true, items: [
                    { label: "Documentation" },
                    { label: "Research" },
                    { label: "Nice to have" }
                ]
            },
            {
                label: "Tasks", expanded: true, items: [
                    { label: "Add/change components" },
                    { label: "Bugs" },
                    { label: "Issues" },
                ]
            },
        ]
    }];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map