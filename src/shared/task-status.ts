import {Model} from './model';

export class TaskStatus extends Model {

	id?: number;
	name?: string;
	description?: string;

	constructor(source: Partial<TaskStatus>, extra = {}) {
		super(source, extra);

	}
}

