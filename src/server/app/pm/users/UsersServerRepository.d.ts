import { ServerRepository } from '@server/app/ServerRepository';
import { ServerStore } from '@server/app/ServerStore';
export declare class UsersServerRepository extends ServerRepository {
    protected store: ServerStore;
    tableName: string;
    schema: string;
    primaryKey: string;
    constructor(store: ServerStore);
}
