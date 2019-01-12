import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class TaskTypesServerRepository extends ServerRepository {
	tableName = 'task-types';
	schema = 'pm';
	primaryKey = 'id';

	constructor(protected store: ServerStore) {
		super(store);
	}
}

