import {ServerService} from '@server/app/ServerService';
import {<%=Entities%>ServerRepository} from './<%=Entities%>ServerRepository';
import {ServerStore} from '@server/app/ServerStore';
import {<%=Entity%>} from '@shared/<%=entity%>';

export class <%=Entities%>ServerService extends ServerService<<%=Entity%>, <%=Entities%>ServerRepository> {
    public repository: <%=Entities%>ServerRepository;

    constructor(protected store: ServerStore) {
        super(<%=Entity%>, store);
        this.repository = new <%=Entities%>ServerRepository(store);
    }
}