import {ServerServiceController} from '@server/app/ServerServiceController';
import {ServerStore} from '@server/app/ServerStore';
import {<%= Entity %>} from '@shared/<%= entity %>';
import {<%= Entities %>ServerService} from '@module/<%= entities %>/<%= Entities %>ServerService';
import {<%= Entities %>ServerRepository} from '@module/<%= entities %>/<%= Entities %>ServerRepository';

export class ServerController extends ServerServiceController<<%= Entity %>, <%= Entities %>ServerService, <%= Entities %>ServerRepository> {
    service: <%= Entities %>ServerService;

    constructor(protected app, private store: ServerStore) {
        super(app, "<%= entities %>");
        this.service = new <%= Entities %>ServerService(this.store);
        this.setDefaultRoutes();
    }
}

