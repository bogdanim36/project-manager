import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {TaskStatus} from '@shared/task-status';

@Injectable({providedIn: 'root'})
export class TaskStatusClientService extends ClientService<TaskStatus> {

	constructor(protected http: HttpClient) {
		super(http, TaskStatus, 'api/task-status');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this._items = response;
			return response;
		});
	}
}