import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    ButtonModule,
    DialogModule,
    DialogService, DynamicDialogConfig,
    DynamicDialogRef,
    InputTextareaModule,
    InputTextModule,
    SidebarModule, ToggleButtonModule
} from 'primeng/primeng';
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from '@angular/material';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SideMenuComponent} from './layout/side-menu/side-menu.component';
import {MainToolbarComponent} from './layout/main-toolbar/main-toolbar.component';
import {MenuService} from '@app/layout/side-menu/menu.service';
import {UsersIndexComponent} from '@app/module/pages/users/index/users-index.component';
import {UsersClientService} from '@app/module/pages/users/users-client-service';
import {TableModule} from 'primeng/table';
import {DataViewModule} from 'primeng/dataview';
import {PanelMenuModule} from '@app/prime-ng/panelmenu/panelmenu';
import {UsersUiConfig} from '@app/module/pages/users/users-ui-config';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {FormsModule} from '@angular/forms';
import {UsersMobileListComponent} from './module/pages/users/mobile-list/users-mobile-list.component';
import {UsersTableListComponent} from './module/pages/users/table-list/users-table-list.component';
import {UserFormComponent} from './module/pages/users/form/user-form.component';
import {DynamicDialogModule} from 'primeng/components/dynamicdialog/dynamicdialog';
import {ProjectsIndexComponent} from '@app/module/pages/projects/index/projects-index.component';
import {ProjectFormComponent} from '@app/module/pages/projects/form/project-form.component';
import {ProjectsMobileListComponent} from '@app/module/pages/projects/mobile-list/projects-mobile-list.component';
import {ProjectsTableListComponent} from '@app/module/pages/projects/table-list/projects-table-list.component';
import {ProjectsClientService} from '@app/module/pages/projects/projects-client-service';
import {ProjectsUiConfig} from '@app/module/pages/projects/projects-ui-config';
import {InputSwitchModule} from 'primeng/inputswitch';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {EntityPageModule} from '@app/components/entity-page.module';
import {EntityTableListComponent} from '@app/components/entity-page/table-list/entity-table-list.component';
import {TasksUiConfig} from '@app/module/pages/tasks/tasks-ui-config';
import {TasksClientService} from '@app/module/pages/tasks/tasks-client-service';
import {EntityMobileListComponent} from '@app/components/entity-page/mobile-list/entity-mobile-list.component';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {TaskFormComponent} from '@app/module/pages/tasks/form/task-form.component';

@NgModule({
    entryComponents: [
        UserFormComponent,
        ProjectFormComponent,
        EntityFormComponent,
        TaskFormComponent
    ],
    declarations: [
        AppComponent,
        SideMenuComponent,
        MainToolbarComponent,
        UsersIndexComponent,
        ProjectsIndexComponent,
        TasksIndexComponent,
        UsersMobileListComponent,
        UsersTableListComponent,
        UserFormComponent,
        ProjectFormComponent,
        ProjectsMobileListComponent,
        ProjectsTableListComponent,
        EntityTableListComponent,
        EntityMobileListComponent,
        EntityFormComponent,
        TaskFormComponent
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
        TableModule,
        ButtonModule,
        DataViewModule,
        DialogModule,
        DynamicDialogModule,
        FormsModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        ToggleButtonModule
    ],
    providers: [
        HttpClient,
        MenuService,
        DialogService,
        DynamicDialogRef,
        UsersClientService,
        UsersUiConfig,
        ProjectsClientService,
        ProjectsUiConfig,
        TasksUiConfig,
        TasksClientService,
        EntityFormComponent,
        DynamicDialogConfig
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
