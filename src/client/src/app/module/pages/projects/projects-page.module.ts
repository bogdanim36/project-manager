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

import {ProjectFormComponent} from '@app/module/pages/projects/form/project-form.component';
import {ProjectsIndexComponent} from '@app/module/pages/projects/index/projects-index.component';
import {ProjectsClientService} from '@app/module/pages/projects/projects-client.service';
import {ProjectsUiConfig} from '@app/module/pages/projects/projects-ui-config';

@NgModule({
	entryComponents: [
		ProjectFormComponent,
	],
	declarations: [
		ProjectsIndexComponent,
		ProjectFormComponent,
	],
	providers: [
		ProjectsClientService,
		ProjectsUiConfig
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

export class ProjectsPageModule {
}