import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from '@angular/cdk/layout';

import {PageComponent} from '@app/core/page.component';
import {DialogService} from 'primeng/api';
import {Project} from '@shared/project';
import {ProjectsUiConfig} from '@app/module-pm/pages/projects/projects-ui-config';
import {ProjectsClientService} from '@app/module-pm/pages/projects/projects-client-service';
import {ProjectFormComponent} from '@app/module-pm/pages/projects/form/project-form.component';

@Component({
    selector: 'app-projects-list',
    templateUrl: './projects-index.component.html',
    styleUrls: ['./projects-index.component.scss']
})
export class TasksIndexComponent extends PageComponent implements OnInit {
    isNewItem = false;
    editingItem: Partial<Project>;

    constructor(public service: ProjectsClientService, breakpointObserver: BreakpointObserver, public uiConfig: ProjectsUiConfig, public dialogService: DialogService) {
        super(breakpointObserver);
    }

    ngOnInit() {
        this.service.getAll().then((data) => console.log('get data', data), console.error);
    }

    showDialogToAdd() {
        this.showDialog(true, {});
    }

    showDialogToEdit(event, item) {
        this.showDialog(false, item);
    }

    showDialog(isNewItem: boolean, source) {
        this.isNewItem = isNewItem;
        const  editingItem =  this.service.instanceCreate(source);
        this.dialogService.open(ProjectFormComponent, {
            data: {
                uiConfig:this.uiConfig,
                item: editingItem,
                source: source,
                launcher: this,
                isNewItem: isNewItem,
                save: this.save.bind(this),
                delete: this.delete.bind(this)
            },
            height: this.isHandset? "100%": "auto",
            width: this.isHandset?"100%": "300px"
        });
    }

    save(isNewItem, source,edited) {
        if (isNewItem)
            this.service.create(edited);
        else
            this.service.update(source, edited);

        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }

    delete(item) {
        this.service.delete(item);
        this.editingItem = null;
        this.dialogService.dialogComponentRef.instance.close();
    }
}
