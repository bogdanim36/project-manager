import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class TasksServerRepository extends ServerRepository {
    tableName = 'tasks';
    schema = 'pm';
    primaryKey = 'id';

    constructor(protected store: ServerStore) {
        super(store);
    }


}

