import {Model} from './model';

export class TaskType extends Model {

	id?: number;
	name?: string;
	description?: string;

	constructor(source: Partial<TaskType>, extra = {}) {
		super(source, extra);

	}
}

