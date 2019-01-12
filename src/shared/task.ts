import {Model} from './model';

export class Task extends Model {

	id?: number;
	name?: string;
	type?: string;
	description?: string;
	closed?: boolean;
	projectId?: number;
	parentId?: number;

	constructor(source: Partial<Task>, extra = {}) {
		super(source, extra);

		if (typeof source["closed"] === "number") this["closed"] = source["closed"] === 1;
		if (typeof source["closed"] === "undefined") this["closed"] = false;
	}
}

