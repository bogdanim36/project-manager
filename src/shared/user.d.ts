import { Model } from './model';
export declare class User extends Model {
    id?: number;
    email?: string;
    firstName?: string;
    lastName?: string;
    fullName?: string;
    constructor(source: Partial<User>, extra?: {});
}
