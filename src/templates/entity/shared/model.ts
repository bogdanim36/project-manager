import {Model} from './model';

export class <%= Entity%> extends Model {
    id?: number;
    name?: string;
    description?: string;
    type?:string;
    projectId?:number;
    closed?: boolean ;
    parentId?: number ;

    constructor(source: Partial<<%= Entity%>>, extra = {}) {
        super(source, extra);
        if (typeof source.closed === 'number') this.closed = source.closed === 1 ? true : false;
        if (typeof source.closed === 'undefined') this.closed = false;
    }
}

