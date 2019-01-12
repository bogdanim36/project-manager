import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {TaskType} from '@shared/task-type';
import {TaskTypesServerService} from '@module/task-types/TaskTypesServerService';
import {TaskTypesServerRepository} from '@module/task-types/TaskTypesServerRepository';

export class TaskTypesServerController extends ServerServiceController<TaskType, TaskTypesServerService, TaskTypesServerRepository> {
	service: TaskTypesServerService;

	constructor(protected app, private store: ServerStore) {
		super(app, "task-types");
		this.service = new TaskTypesServerService(this.store);
		this.setDefaultRoutes();
	}
}

