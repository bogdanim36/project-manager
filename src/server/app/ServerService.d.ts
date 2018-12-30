import { ServerStore } from '@server/app/ServerStore';
import { ServerRepository } from '@server/app/ServerRepository';
export declare class ServerService<M, R extends ServerRepository> {
    protected modelClass: M & Function;
    protected store: ServerStore;
    repository: R;
    constructor(modelClass: M & Function, store: ServerStore);
    instanceCreate(source: Partial<M>, extra?: any): M;
    injectModelInCollection(input: any): any[];
    getAll(): Promise<Array<M>>;
    getOne(id: any): Promise<any>;
    new(source: any): M;
    create(item: any): Promise<M>;
    update(id: any, item: any): Promise<M>;
    delete(id: any): Promise<boolean>;
}
