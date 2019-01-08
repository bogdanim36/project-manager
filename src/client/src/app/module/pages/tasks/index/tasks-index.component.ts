import {Component, OnInit} from '@angular/core';
import {DialogService} from 'primeng/api';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {TasksUiConfig} from '@app/module/pages/tasks/tasks-ui-config';
import {TasksClientService} from '@app/module/pages/tasks/tasks-client-service';
import {Task} from '@shared/task';
import {TaskFormComponent} from '@app/module/pages/tasks/form/task-form.component';
import {AppSharedService} from '@app/core/app-shared.service';

@Component({
    selector: 'app-tasks-list',
    templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
    styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class TasksIndexComponent extends EntityIndexComponent<Task, TasksUiConfig, TasksClientService> implements OnInit {

    constructor(appShared: AppSharedService,
                protected service: TasksClientService,
                protected uiConfig: TasksUiConfig,
                protected dialogService: DialogService
    ) {
        super(appShared, TaskFormComponent);
    }
}
