import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {<%= Entities %>IndexComponent} from '@app/module/pages/<%= entities %>/index/<%= entities %>-index.component';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {<%= Entity %>} from '@shared/<%= entity %>';

@Component({
    selector: 'app-<%= entity %>-form',
    templateUrl: './<%= entity %>-form.component.html',
    styleUrls: ['./<%= entity %>-form.component.scss']
})
export class <%= Entity %>FormComponent extends EntityFormComponent<<%= Entity %>, <%= Entities %>IndexComponent> {

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        super(ref, config);
    }

    ngOnInit() {
    }

}
