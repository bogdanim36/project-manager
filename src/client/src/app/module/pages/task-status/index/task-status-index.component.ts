import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';

import {AppSharedService} from '@app/core/app-shared.service';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {TaskStatus} from '@shared/task-status';
import {TaskStatusUiConfig} from '@app/module/pages/task-status/task-status-ui-config';
import {TaskStatusFormComponent} from '@app/module/pages/task-status/form/task-status-form.component';
import {TaskStatusClientService} from '@app/module/pages/task-status/task-status-client.service';

@Component({
	selector: 'app-task-status-list',
	templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
	styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class TaskStatusIndexComponent extends EntityIndexComponent<TaskStatus, TaskStatusUiConfig, TaskStatusClientService> implements OnInit {

	constructor(appShared: AppSharedService,
				public service: TaskStatusClientService,
				public uiConfig: TaskStatusUiConfig,
				public dialogService: DialogService) {
		super(appShared, TaskStatusFormComponent);
	}
}
