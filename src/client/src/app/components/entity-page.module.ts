import {NgModule} from '@angular/core';
import {EntityTableListComponent} from '@app/components/entity-page/table-list/entity-table-list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {EntityMobileListComponent} from '@app/components/entity-page/mobile-list/entity-mobile-list.component';

@NgModule({
    declarations: [
        EntityTableListComponent,
        EntityMobileListComponent
    ],
    imports: [
        TableModule,
        ButtonModule,
    ]
})

export class EntityPageModule {

}