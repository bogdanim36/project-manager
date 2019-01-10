import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {ClientService} from '@app/core/client-service';
import {<%= Entity %>} from '@shared/<%= entity %>';

@Injectable({providedIn: 'root'})
export class <%= Entities %>ClientService extends ClientService<<%= Entity %>> {

    constructor(protected http: HttpClient) {
        super(http, <%= Entity %>, 'api/<%= entities %>');
    }

    getAll(params?, reload: boolean = false): Promise<any> {
        return super.getAll(params, reload).then((response) => {
            this._items = response;
            return response;
        });
    }
}