import {Component, Input, OnInit, Renderer, ViewChild} from '@angular/core';
import {Table} from 'primeng/table';

@Component({
    selector: 'app-entity-table-list',
    templateUrl: './entity-table-list.component.html',
    styleUrls: ['./entity-table-list.component.scss']
})
export class EntityTableListComponent implements OnInit {
    @Input() parentRef;
    @ViewChild('entitiesTable') table: Table;

    constructor() {
    }

    ngOnInit() {
        console.log('parent', this.parentRef, this.table);
    }
}
