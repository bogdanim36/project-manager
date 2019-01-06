import {Component, forwardRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ProjectsIndexComponent} from '@app/module/pages/projects/index/projects-index.component';
import {Table} from 'primeng/table';

@Component({
    selector: 'app-projects-table-list',
    templateUrl: './projects-table-list.component.html',
    styleUrls: ['./projects-table-list.component.scss']
})
export class ProjectsTableListComponent implements OnInit {
    @ViewChild('entitiesTable') table: Table;

    constructor(@Inject(forwardRef(() => ProjectsIndexComponent)) public parent: ProjectsIndexComponent) {
    }

    ngOnInit() {
    }
}
