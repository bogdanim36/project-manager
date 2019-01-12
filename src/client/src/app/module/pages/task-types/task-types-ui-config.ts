import {EntityUiConfig} from '@app/core/entity-ui-config';

export class TaskTypesUiConfig extends EntityUiConfig {

	constructor() {
		super();
		this.addColumn({field: 'name', header: 'Name', sortable: true, width: '250px', editable:true});
		this.addColumn({field: 'description', header: 'Description', sortable: true, width: '100%', editable:true});

		this.labels.list = 'List of Task Types';
		this.labels.addItem = 'Add Task Type';
		this.labels.save = 'Save';
		this.labels.delete = 'Delete';
		this.labels.itemDetails = 'Task Type Details';
	}
}