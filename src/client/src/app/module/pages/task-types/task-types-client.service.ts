import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {TaskType} from '@shared/task-type';

@Injectable({providedIn: 'root'})
export class TaskTypesClientService extends ClientService<TaskType> {

	constructor(protected http: HttpClient) {
		super(http, TaskType, 'api/task-types');
	}

	getAll(params?, reload: boolean = false): Promise<any> {
		return super.getAll(params, reload).then((response) => {
			this._items = response;
			return response;
		});
	}
}