var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideMenuComponent } from './layout/side-menu/side-menu.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { PanelMenuModule, SidebarModule } from "primeng/primeng";
import { MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule } from "@angular/material";
import { DeviceDetectorService } from "ngx-device-detector";
import { MainToolbarComponent } from './layout/main-toolbar/main-toolbar.component';
import { MenuService } from "./layout/side-menu/menu.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { UsersIndexComponent } from './module-pm/pages/users/index/users-index.component';
import { ProjectsListComponent } from './module-pm/pages/projects/list/projects-list.component';
import { UserService } from '@app/pages/users/user.service';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SideMenuComponent,
                MainToolbarComponent,
                UsersIndexComponent,
                ProjectsListComponent
            ],
            imports: [
                BrowserModule,
                HttpClientModule,
                AppRoutingModule,
                PanelMenuModule,
                MatIconModule,
                MatToolbarModule,
                MatSidenavModule,
                MatButtonModule,
                MatListModule,
                SidebarModule,
                BrowserAnimationsModule
            ],
            providers: [DeviceDetectorService, HttpClient, MenuService, UserService],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map