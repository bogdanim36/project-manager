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

import {TaskTypeFormComponent} from '@app/module/pages/task-types/form/task-type-form.component';
import {TaskTypesIndexComponent} from '@app/module/pages/task-types/index/task-types-index.component';
import {TaskTypesClientService} from '@app/module/pages/task-types/task-types-client.service';
import {TaskTypesUiConfig} from '@app/module/pages/task-types/task-types-ui-config';

@NgModule({
	entryComponents: [
		TaskTypeFormComponent,
	],
	declarations: [
		TaskTypesIndexComponent,
		TaskTypeFormComponent,
	],
	providers: [
		TaskTypesClientService,
		TaskTypesUiConfig
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

export class TaskTypesPageModule {
}