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

import {TaskStatusFormComponent} from '@app/module/pages/task-status/form/task-status-form.component';
import {TaskStatusIndexComponent} from '@app/module/pages/task-status/index/task-status-index.component';
import {TaskStatusClientService} from '@app/module/pages/task-status/task-status-client.service';
import {TaskStatusUiConfig} from '@app/module/pages/task-status/task-status-ui-config';

@NgModule({
	entryComponents: [
		TaskStatusFormComponent,
	],
	declarations: [
		TaskStatusIndexComponent,
		TaskStatusFormComponent,
	],
	providers: [
		TaskStatusClientService,
		TaskStatusUiConfig
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

export class TaskStatusPageModule {
}