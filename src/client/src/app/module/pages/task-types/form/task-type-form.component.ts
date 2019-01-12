import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {TaskType} from '@shared/task-type';
import {TaskTypesIndexComponent} from '@app/module/pages/task-types/index/task-types-index.component';
import {TaskTypesClientService} from '@app/module/pages/task-types/task-types-client.service';

@Component({
	selector: 'app-task-type-form',
	templateUrl: './task-type-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './task-type-form.component.scss']
})
export class TaskTypeFormComponent extends EntityFormComponent<TaskType, TaskTypesIndexComponent, TaskTypesClientService, TaskTypesIndexComponent > {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
