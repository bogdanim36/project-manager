import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';

import {AppLayoutModule} from '@app/layout/app-layout.module';
import {UsersPageModule} from '@app/module/pages/users/users-page.module';
import {TasksPageModule} from '@app/module/pages/tasks/tasks-page.module';
import {ProjectsPageModule} from '@app/module/pages/projects/projects-page.module';
import {AppSharedService} from '@app/core/app-shared.service';
import {TaskTypesPageModule} from '@app/module/pages/task-types/task-types-page.module';
import {TaskStatusPageModule} from '@app/module/pages/task-status/task-status-page.module';

@NgModule({
	declarations: [
		AppComponent,
	],
	
imports : [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		AppLayoutModule,
		UsersPageModule,
		TasksPageModule,
		ProjectsPageModule,
		TaskTypesPageModule,
		TaskStatusPageModule
	],
	bootstrap: [AppComponent],
	providers: [AppSharedService]
})
export class AppModule {
}
