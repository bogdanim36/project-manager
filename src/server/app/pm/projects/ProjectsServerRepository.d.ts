import { ServerRepository } from '@server/app/ServerRepository';
import { ServerStore } from '@server/app/ServerStore';
export declare class ProjectsServerRepository extends ServerRepository {
    protected store: ServerStore;
    tableName: string;
    schema: string;
    primaryKey: string;
    constructor(store: ServerStore);
}
