import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {TasksIndexComponent} from '@app/module/pages/tasks/index/tasks-index.component';
import {EntityDialogData} from '@app/components/entity-page/entityDialogData';
import {Task} from '@shared/task';

@Component({
    selector: 'app-entity-form',
    templateUrl: './entity-form.component.html',
    styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent <M, I> implements OnInit {
    public launcher: I;
    public data: EntityDialogData<M, I>;
    public item: M;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        config.header = config.data.uiConfig.labels.itemDetails;
        config.closeOnEscape = true;
        this.launcher = config.data.launcher;
        this.data = config.data;
        this.item = config.data.item;
    }

    ngOnInit() {
    }

}
