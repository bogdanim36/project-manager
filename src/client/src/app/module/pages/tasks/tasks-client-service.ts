import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {Task} from '@shared/task';

@Injectable({providedIn: 'root'})
export class TasksClientService extends ClientService<Task> {

    constructor(protected http: HttpClient) {
        super(http, Task, 'api/tasks');
    }

    getAll(params?, reload: boolean = false): Promise<any> {
        return super.getAll(params, reload).then((response) => {
            this._items = response;
            return response;
        });
    }
}