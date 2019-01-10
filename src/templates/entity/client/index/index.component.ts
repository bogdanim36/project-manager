import {Component, OnInit} from '@angular/core';

import {DialogService} from 'primeng/api';
import {<%= Entity %>} from '@shared/<%= entity %>';
import {<%= Entities %>UiConfig} from '@app/module/pages/<%= entities %>/<%= entities %>-ui-config';
import {<%= Entity %>FormComponent} from '@app/module/pages/<%= entities %>/form/<%= entity %>-form.component';
import {EntityIndexComponent} from '@app/components/entity-page/index/entity-index.component';
import {<%= Entities %>ClientService} from '@app/module/pages/<%= entities %>/<%= entities %>-client-service';
import {AppSharedService} from '@app/core/app-shared.service';

@Component({
    selector: 'app-<%= entities %>-list',
    templateUrl: '../../../../components/entity-page/index/entity-index.component.html',
    styleUrls: ['../../../../components/entity-page/index/entity-index.component.scss']
})
export class <%=Entities%>IndexComponent extends EntityIndexComponent<<%= Entity %>, <%= Entities %>UiConfig, <%= Entities %>ClientService> implements OnInit {

    constructor(appShared: AppSharedService,
                public service: <%= Entities %>ClientService,
                public uiConfig: <%= Entities %>UiConfig,
                public dialogService: DialogService) {
        super(appShared, <%= Entity %>FormComponent);
    }

}
