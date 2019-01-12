import {ServerService} from '@server/app/ServerService';
import {TasksServerRepository} from './TasksServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {Task} from '@shared/task';

export class TasksServerService extends ServerService<Task, TasksServerRepository> {
	public repository: TasksServerRepository;

	constructor(protected store: ServerStore) {
		super(Task, store);
		this.repository = new TasksServerRepository(store);
	}
}