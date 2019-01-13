import {EntityUiConfig} from '@app/core/entity-ui-config';

export class TaskStatusUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.addColumn({field: 'name', header: 'Name', sortable: true, width: '200px', editable:true});
		this.addColumn({field: 'description', header: 'Description', sortable: true, width: '100%', editable:true});

		this.labels.list = 'List of Task Status';
		this.labels.addItem = 'Add Task Status';
		this.labels.save = 'Save';
		this.labels.delete = 'Delete';
		this.labels.itemDetails = 'Task Status Details';
	}
}