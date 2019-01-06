import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {EntityDialogData} from '@app/components/entity-page/entityDialogData';
import {Task} from '@shared/task';

@Component({
    selector: 'app-task-form',
    templateUrl: './task-form.component.html',
    styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
    public launcher: TasksIndexComponent;
    public data: EntityDialogData<Task, TasksIndexComponent>;
    public item: Task;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        config.header = config.data.uiConfig.labels.itemDetails;
        config.closeOnEscape = true;
        this.launcher = config.data.launcher;
        this.data = config.data;
        this.item = new Task(config.data.item);
    }

    ngOnInit() {
    }

}
