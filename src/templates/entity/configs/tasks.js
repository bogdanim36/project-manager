let base = require('./entity.base');
module.exports = function () {
	let config = new base();
	config.entity = {name: "Task"};
	config.entities = {name: "Tasks"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		//params: name, type, nullable, defaultValue, autoIncrement
		this.column('id', 'int(11)', false, null, true);
		this.column('name', 'varchar(100)', false, null, false);
		this.column('description', 'text', false, null, false);
		this.column('type', 'varchar(10)', false, null, false);
		this.column('closed', 'tinyint', false, null, false );
	};
	config.model.build = function () {
		this.regular("id", true, "number");
		this.regular("name", true, "string");
		this.regular("description", true, "string");
		// this.expression("fullName", true, "string", "((this.firstName ? this.firstName.trim() : '') + (this.lastName ? ' ' + this.lastName.trim() : '')).trim();")
	};
	config.uiConfig.build = function () {
		this.column('name', 'Name', '250px', true, true);
		this.column('description', 'Description', '100%', true, true);
	};
	config.form.build = function () {
		this.inputText('content', 'name', 'Name');
		this.inputTextarea('content', 'description', 'Description');
		this.button('footer', 'config.data.uiConfig.labels.save', 'config.data.save(config.data.isNewItem, config.data.source, config.data.item)');
		this.button('footer', 'config.data.uiConfig.labels.delete', 'config.data.delete(config.data.source)');
	};
	return config;
};
