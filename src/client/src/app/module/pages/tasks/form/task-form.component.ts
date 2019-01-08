import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {Task} from '@shared/task';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent extends EntityFormComponent<Task, TasksIndexComponent>{

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        super(ref, config);
    }

    ngOnInit() {
    }

}
