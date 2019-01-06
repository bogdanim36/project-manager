import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';

@Component({
    selector: 'app-entity-form',
    templateUrl: './entity-form.component.html',
    styleUrls: ['./entity-form.component.scss']
})
export class EntityFormComponent implements OnInit {
    public launcher: any;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        config.header = config.data.uiConfig.labels.itemDetails;
        config.closeOnEscape = true;
        this.launcher = config.data.launcher;
    }

    ngOnInit() {
    }

}
