import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {ProjectsIndexComponent} from '@app/module-pm/pages/projects/index/projects-index.component';

@Component({
    selector: 'app-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {
    launcher: ProjectsIndexComponent;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        config.header = config.data.uiConfig.labels.itemDetails;
        config.closeOnEscape = true;
        this.launcher = config.data.launcher;
    }

    ngOnInit() {
    }

}
