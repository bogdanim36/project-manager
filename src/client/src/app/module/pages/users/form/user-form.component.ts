import {Component} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {UsersIndexComponent} from '@app/module/pages/users/index/users-index.component';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {User} from '@shared/User';

@Component({
    selector: 'app-user-form',
    templateUrl: './user-form.component.html',
    styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent extends EntityFormComponent<User, UsersIndexComponent> {

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
        super(ref, config);
    }

    ngOnInit() {
    }

}
