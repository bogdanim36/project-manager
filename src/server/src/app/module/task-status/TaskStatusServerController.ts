import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {TaskStatus} from '@shared/task-status';
import {TaskStatusServerService} from '@module/task-status/TaskStatusServerService';
import {TaskStatusServerRepository} from '@module/task-status/TaskStatusServerRepository';

export class TaskStatusServerController extends ServerServiceController<TaskStatus, TaskStatusServerService, TaskStatusServerRepository> {
	service: TaskStatusServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "task-status");
		this.service = new TaskStatusServerService(this.store);
		this.setDefaultRoutes();
	}
}

