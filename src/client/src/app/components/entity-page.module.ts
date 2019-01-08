import {NgModule} from '@angular/core';
import {EntityTableListComponent} from '@app/components/entity-page/table-list/entity-table-list.component';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {EntityMobileListComponent} from '@app/components/entity-page/mobile-list/entity-mobile-list.component';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';
import {DynamicDialogModule} from 'primeng/dynamicdialog';
import {FormsModule} from '@angular/forms';
import {DialogService, DynamicDialogRef} from 'primeng/api';
import {BrowserModule} from '@angular/platform-browser';
import {InputSwitchModule, InputTextareaModule, InputTextModule, ToggleButtonModule} from 'primeng/primeng';

@NgModule({
    declarations: [
        EntityTableListComponent,
        EntityMobileListComponent,
        EntityFormComponent,

    ],
    exports:[
        EntityTableListComponent,
        EntityMobileListComponent,
        EntityFormComponent
    ],
    imports: [
        BrowserModule,
        TableModule,
        ButtonModule,
        TableModule,
        ButtonModule,
        DataViewModule,
        DialogModule,
        DynamicDialogModule,
        FormsModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        ToggleButtonModule,

    ],
    providers: [
        EntityFormComponent,
        DialogService,
        DynamicDialogRef,
    ]
})

export class EntityPageModule {

}