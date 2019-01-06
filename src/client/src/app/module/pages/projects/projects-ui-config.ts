import {EntityUiConfig} from '@app/core/entity-ui-config';

export class ProjectsUiConfig extends EntityUiConfig {

    constructor() {
        super();
        this.addColumn({field: 'name', header: 'Name', sortable: true, width: '250px'});
        this.addColumn({field: 'description', header: 'Description', width: '100%', editable: true});
        this.addColumn({field: 'closed', header: 'Closed', sortable: true, width: '100px', editable: true});
        this.labels.list = 'List of Projects';
        this.labels.addItem = 'Add Project';
        this.labels.save = 'Save';
        this.labels.delete = 'Delete';
        this.labels.itemDetails = 'Project Details';
    }
}