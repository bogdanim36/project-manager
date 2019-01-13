import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class TaskStatusServerRepository extends ServerRepository {
	tableName = 'task-status';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

