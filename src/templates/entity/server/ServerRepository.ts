import {ServerRepository} from '@server/app/ServerRepository';
import {ServerStore} from '@server/app/ServerStore';

export class <%=Entities%>ServerRepository extends ServerRepository {
    tableName = '<%=entities%>';
    schema = 'pm';
    primaryKey = 'id';

    constructor(protected store: ServerStore) {
        super(store);
    }


}

