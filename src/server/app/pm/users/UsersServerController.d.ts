import { ServerServiceController } from '@server/app/ServerServiceController';
import { UserService } from '@module/users/UsersServerService';
import { ServerStore } from '@server/app/ServerStore';
import { UsersServerRepository } from '@module/users/UsersServerRepository';
import { User } from '@shared/user';
export declare class UsersServerController extends ServerServiceController<User, UserService, UsersServerRepository> {
    protected app: any;
    private store;
    service: UserService;
    constructor(app: any, store: ServerStore);
}
