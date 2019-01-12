import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {TaskType} from '@shared/task-type';
import {TaskTypesUiConfig} from '@app/module/pages/task-types/task-types-ui-config';
import {TaskTypeFormComponent} from '@app/module/pages/task-types/form/task-type-form.component';
import {TaskTypesClientService} from '@app/module/pages/task-types/task-types-client.service';

@Component({
	selector: 'app-task-types-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class TaskTypesIndexComponent extends EntityIndexComponent<TaskType, TaskTypesUiConfig, TaskTypesClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: TaskTypesClientService,
				public uiConfig: TaskTypesUiConfig,
				public dialogService: DialogService) {
		super(appShared, TaskTypeFormComponent);
	}
}
