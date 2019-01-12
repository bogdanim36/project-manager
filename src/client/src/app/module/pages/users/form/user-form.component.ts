import {Component, OnInit} from '@angular/core';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/api';
import {EntityFormComponent} from '@app/components/entity-page/form/entity-form.component';
import {User} from '@shared/user';
import {UsersIndexComponent} from '@app/module/pages/users/index/users-index.component';
import {UsersClientService} from '@app/module/pages/users/users-client.service';

@Component({
	selector: 'app-user-form',
	templateUrl: './user-form.component.html',
	styleUrls: ['../../../../components/entity-page/form/entity-form.component.scss', './user-form.component.scss']
})
export class UserFormComponent extends EntityFormComponent<User, UsersIndexComponent, UsersClientService, UsersIndexComponent > {

	constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) {
		super(ref, config);
	}

	ngOnInit() {
	}

}
