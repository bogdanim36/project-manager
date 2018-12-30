import { Model } from './model';
export declare class Project extends Model {
    id?: number;
    name?: string;
    description?: string;
    closed?: boolean;
    parentId?: number;
    constructor(source: Partial<Project>, extra?: {});
}
