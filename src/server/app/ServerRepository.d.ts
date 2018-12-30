import { ServerStore } from '@server/app/ServerStore';
import { ServerDb } from '@server/app/ServerDb';
export declare class ServerRepository {
    protected store: ServerStore;
    tableName: string;
    primaryKey: string;
    db: ServerDb;
    constructor(store: ServerStore, db?: ServerDb);
    getAll(): Promise<any>;
    getOne(id: any): Promise<any>;
    update(id: any, item: any): Promise<any>;
    create(item: any): Promise<any>;
    delete(id: any): Promise<any>;
}
