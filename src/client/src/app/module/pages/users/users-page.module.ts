import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EntityPageModule} from '@app/components/entity-page.module';
import {FormsModule} from '@angular/forms';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    ButtonModule,
    DialogModule,
    InputSwitchModule,
    InputTextareaModule,
    InputTextModule,
    ToggleButtonModule
} from 'primeng/primeng';

import {UserFormComponent} from './form/user-form.component';
import {UsersIndexComponent} from './index/users-index.component';
import {UsersClientService} from './users-client-service';
import {UsersUiConfig} from './users-ui-config';

@NgModule({
    entryComponents: [
        UserFormComponent,
    ],
    declarations: [
        UsersIndexComponent,
        UserFormComponent,
    ],
    imports: [
        BrowserModule,
        EntityPageModule,
        DialogModule,
        ButtonModule,
        FormsModule,
        AngularFontAwesomeModule,
        BrowserAnimationsModule,
        InputTextModule,
        InputSwitchModule,
        InputTextareaModule,
        ToggleButtonModule,
    ],
    providers: [
        UsersClientService,
        UsersUiConfig
    ]
})

export class UsersPageModule {

}