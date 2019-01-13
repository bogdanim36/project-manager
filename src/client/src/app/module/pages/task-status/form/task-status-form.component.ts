import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {TaskStatus} from '@shared/task-status';
import {TaskStatusIndexComponent} from '@app/module/pages/task-status/index/task-status-index.component';
import {TaskStatusClientService} from '@app/module/pages/task-status/task-status-client.service';

@Component({
	selector: 'app-task-status-form',
	templateUrl: './task-status-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './task-status-form.component.scss']
})
export class TaskStatusFormComponent extends EntityFormComponent<TaskStatus, TaskStatusIndexComponent, TaskStatusClientService, TaskStatusIndexComponent > {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
