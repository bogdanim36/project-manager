import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {Task} from '@shared/task';
import {TasksUiConfig} from '@app/module/pages/tasks/tasks-ui-config';
import {TaskFormComponent} from '@app/module/pages/tasks/form/task-form.component';
import {TasksClientService} from '@app/module/pages/tasks/tasks-client.service';

@Component({
	selector: 'app-tasks-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class TasksIndexComponent extends EntityIndexComponent<Task, TasksUiConfig, TasksClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: TasksClientService,
				public uiConfig: TasksUiConfig,
				public dialogService: DialogService) {
		super(appShared, TaskFormComponent);
	}
}
