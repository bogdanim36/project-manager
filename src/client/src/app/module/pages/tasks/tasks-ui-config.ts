import {EntityUiConfig} from '@app/core/entity-ui-config';

export class TasksUiConfig extends EntityUiConfig {

    constructor() {
        super();
        this.addColumn({field: 'name', header: 'Name', sortable: true, width: '250px'});
        this.addColumn({field: 'description', header: 'Description', width: '100%', editable: true});
        this.addColumn({field: 'type', header: 'Type', width: '100%', editable: true});
        this.addColumn({field: 'closed', header: 'Closed', sortable: true, width: '100px', editable: true});
        this.labels.list = 'List of Tasks';
        this.labels.addItem = 'Add Task';
        this.labels.save = 'Save';
        this.labels.delete = 'Delete';
        this.labels.itemDetails = 'Task Details';
    }
}