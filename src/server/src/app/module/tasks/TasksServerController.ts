import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {Task} from '@shared/task';
import {TasksServerService} from '@module/tasks/TasksServerService';
import {TasksServerRepository} from '@module/tasks/TasksServerRepository';

export class TasksServerController extends ServerServiceController<Task, TasksServerService, TasksServerRepository> {
	service: TasksServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "tasks");
		this.service = new TasksServerService(this.store);
		this.setDefaultRoutes();
	}
}

