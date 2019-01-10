import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {EntityPageModule} from '@app/components/entity-page/entity-page.module';
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

import {<%= Entity %>FormComponent} from '@app/module/pages/<%= entities %>/form/<%= entity %>-form.component';
import {<%= Entities %>IndexComponent} from '@app/module/pages/<%= entities %>/index/<%= entities %>-index.component';
import {<%= Entities %>ClientService} from '@app/module/pages/<%= entities %>/<%= entities %>-client-service';
import {<%= Entities %>UiConfig} from '@app/module/pages/<%= entities %>/<%= entities %>-ui-config';

@NgModule({
    entryComponents: [
        <%= Entity %>FormComponent,
    ],
    declarations: [
        <%= Entities %>IndexComponent,
        <%= Entity %>FormComponent,
    ],
    providers: [
        <%= Entities %>ClientService,
        <%= Entities %>UiConfig
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
    ]
})

export class <%= Entities %>PageModule {

}