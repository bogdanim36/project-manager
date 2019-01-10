import {EntityUiConfig} from '@app/core/entity-ui-config';

export class <%= Entities %>UiConfig extends EntityUiConfig {

    constructor() {
        super();
        <%= uiConfig %>
        this.labels.list = 'List of <%=Entities%>';
        this.labels.addItem = 'Add <%=Entity%>';
        this.labels.save = 'Save';
        this.labels.delete = 'Delete';
        this.labels.itemDetails = '<%=Entity%> Details';
    }
}