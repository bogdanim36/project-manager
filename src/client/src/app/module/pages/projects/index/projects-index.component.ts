import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {Project} from '@shared/project';
import {ProjectsUiConfig} from '@app/module/pages/projects/projects-ui-config';
import {ProjectFormComponent} from '@app/module/pages/projects/form/project-form.component';
import {ProjectsClientService} from '@app/module/pages/projects/projects-client.service';

@Component({
	selector: 'app-projects-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class ProjectsIndexComponent extends EntityIndexComponent<Project, ProjectsUiConfig, ProjectsClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: ProjectsClientService,
				public uiConfig: ProjectsUiConfig,
				public dialogService: DialogService) {
		super(appShared, ProjectFormComponent);
	}
}
