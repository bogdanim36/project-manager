import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
	ButtonModule,
	DialogModule,
	InputSwitchModule,
	InputTextareaModule,
	InputTextModule,
	ToggleButtonModule
} from 'primeng/primeng';

import {TaskFormComponent} from '@app/module/pages/tasks/form/task-form.component';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {TasksClientService} from '@app/module/pages/tasks/tasks-client.service';
import {TasksUiConfig} from '@app/module/pages/tasks/tasks-ui-config';

@NgModule({
	entryComponents: [
		TaskFormComponent,
	],
	declarations: [
		TasksIndexComponent,
		TaskFormComponent,
	],
	providers: [
		TasksClientService,
		TasksUiConfig
	],
	imports: [
		BrowserModule,
		EntityPageModule,
		DialogModule,
		ButtonModule,
		FormsModule,
		AngularFontAwesomeModule,
		BrowserAnimationsModule,
		InputTextModule,
		InputSwitchModule,
		InputTextareaModule,
		ToggleButtonModule,
	]
})

export class TasksPageModule {
}