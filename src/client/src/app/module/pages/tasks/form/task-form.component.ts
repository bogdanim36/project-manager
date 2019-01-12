import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {Task} from '@shared/task';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {TasksClientService} from '@app/module/pages/tasks/tasks-client.service';

@Component({
	selector: 'app-task-form',
	templateUrl: './task-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './task-form.component.scss']
})
export class TaskFormComponent extends EntityFormComponent<Task, TasksIndexComponent, TasksClientService, TasksIndexComponent > {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
