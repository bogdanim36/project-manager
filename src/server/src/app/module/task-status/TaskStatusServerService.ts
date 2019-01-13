import {ServerService} from '@server/app/ServerService';
import {TaskStatusServerRepository} from './TaskStatusServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {TaskStatus} from '@shared/task-status';

export class TaskStatusServerService extends ServerService<TaskStatus, TaskStatusServerRepository> {
	public repository: TaskStatusServerRepository;

	constructor(protected store: ServerStore) {
		super(TaskStatus, store);
		this.repository = new TaskStatusServerRepository(store);
	}
}