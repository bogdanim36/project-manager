import {ServerService} from '@server/app/ServerService';
import {TaskTypesServerRepository} from './TaskTypesServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {TaskType} from '@shared/task-type';

export class TaskTypesServerService extends ServerService<TaskType, TaskTypesServerRepository> {
	public repository: TaskTypesServerRepository;

	constructor(protected store: ServerStore) {
		super(TaskType, store);
		this.repository = new TaskTypesServerRepository(store);
	}
}