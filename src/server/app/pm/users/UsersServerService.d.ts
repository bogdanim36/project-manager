import { User } from '@shared/user';
import { ServerService } from '@server/app/ServerService';
import { UsersServerRepository } from './UsersServerRepository';
import { ServerStore } from '@server/app/ServerStore';
export declare class UserService extends ServerService<User, UsersServerRepository> {
    protected store: ServerStore;
    repository: UsersServerRepository;
    constructor(store: ServerStore);
}
