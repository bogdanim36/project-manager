import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {ProjectsIndexComponent} from '@app/module/pages/projects/index/projects-index.component';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {Project} from '@shared/project';
import {ProjectsClientService} from '@app/module/pages/projects/projects-client-service';

@Component({
	selector: 'app-project-form',
	templateUrl: './project-form.component.html',
	styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent extends EntityFormComponent<Project, ProjectsIndexComponent, ProjectsClientService, ProjectsIndexComponent> {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
