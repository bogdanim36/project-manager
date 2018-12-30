import mysql = require('mysql');
import { ConfigDb } from '@server/ConfigDb';
import { ServerStore } from '@server/app/ServerStore';
import { TableStructureRowData } from '@server/app/TableStructureRowData';
export declare class ServerDb {
    protected store: ServerStore;
    config: ConfigDb;
    connectionPool: mysql.Pool;
    constructor(store: ServerStore);
    static getFieldValue(field: any, value: any): any;
    getDeleteQuery(id: any, tableName: any, schema?: any): Promise<{
        query: string;
        values: any[];
    }>;
    getFieldsList(structure: any, item: any, values: any): string;
    getUpdateQuery(item: any, tableName: any, schema?: any): Promise<{
        query: string;
        values: Array<any>;
    }>;
    getCreateQuery(item: any, tableName: any, schema?: any): Promise<{
        query: string;
        values: Array<any>;
    }>;
    getTableStructure(tableName: string, schema?: string): Promise<Array<TableStructureRowData>>;
    runAsyncQuery(data: any, resolve: any, reject: any): Promise<any>;
    runPromiseQuery(query: any, values: any): Promise<any>;
}
