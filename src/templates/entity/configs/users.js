let base = require('../entity.base');
module.exports = function () {
	let config = new base();
	config.entity = {name: "User"};
	config.entities = {name: "Users"};
	config.script.schema = "pm";
	config.script.primaryKey = 'id';
	config.script.build = function () {
		config.script.column('id', 'int(11)', false, null, true);
		config.script.column('email', 'varchar(250)', false, null, false);
		config.script.column('firstName', 'varchar(50)', false, null, false);
		config.script.column('lastName', 'varchar(50)', false, null, false);
	};
	config.model.build = function () {
		config.model.regular("id", true, "number");
		config.model.regular("email", true, "string");
		config.model.regular("firstName", true, "string");
		config.model.regular("lastName", true, "string");
		config.model.expression("fullName", true, "string", "((this.firstName ? this.firstName.trim() : '') + (this.lastName ? ' ' + this.lastName.trim() : '')).trim();")
	};
	config.uiConfig.build = function () {
		config.uiConfig.column('email', 'Email', '250px', true, true);
		config.uiConfig.column('firstName', 'First Name', '250px', true, true);
		config.uiConfig.column('lastName', 'Last Name', '250px', true, true);
		config.uiConfig.column('fullName', 'Full Name', '250px', true, false);
	};
	config.form.build = function () {
		config.form.inputText('content', 'firstName', 'First Name');
		config.form.inputText('content', 'lastName', 'Last Name');
		config.form.inputText('content', 'email', 'Email');
		config.form.button('footer', {
			'[label]': 'config.data.uiConfig.labels.save',
			'icon': 'fa fa-check',
			'(click)': 'config.data.save(config.data.isNewItem, config.data.source, config.data.item)'
		});
		config.form.button('footer', {
			'[label]': 'config.data.uiConfig.labels.delete',
			'icon': 'fa fa-close',
			'[disabled]': 'config.data.isNewItem',
			'(click)': 'config.data.delete(config.data.source)'
		});
	};
	return config;
};
