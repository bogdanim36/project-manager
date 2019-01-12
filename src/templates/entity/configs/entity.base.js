module.exports = function entityConfig() {
	let config = {
		build: function () {
			this.model.build();
			this.form.build();
			this.uiConfig.build();
			this.script.build();
			let text="To do next:";
			text +="\n1. Add '"+this.entities.pascalCase+"ServerController' to server/src/app/index.ts";
			text +="\n2. Add client routing '"+this.entities.paramCase+"'  in client/src/app/app-routing.module";
			text +="\n3. Add client module '"+this.entities.pascalCase+"PageModule'  in client/src/app/app.module";
			text +="\n4. Add option menu '"+this.entities.name+"' in client/src/app/layout/side-menu/menu.service ";
			console.log(text);
		},
		paths: {
			destRoot: "./src",
			modules: {
				client: {src: ["src/templates/entity/client/**", "!src/templates/entity/client/form/**"], dest: "/client/src/app/module/pages/", entitiesSubdir: true, filesNameCase: 'paramCase', filesName: "entities"},
				clientForm: {src: ["src/templates/entity/client/**", "!src/templates/entity/client/index/**", "!src/templates/entity/client/*.*"], dest: "/client/src/app/module/pages/", entitiesSubdir: true, filesNameCase: 'paramCase', filesName: "entity"},
				shared: {src: "src/templates/entity/shared/**", dest: "/shared/", identity: "\\shared", filesNameCase: 'paramCase', filesName: "entity", addBaseName: false},
				server: {src: "src/templates/entity/server/**", dest: "/server/src/app/module/", entitiesSubdir: true, filesNameCase: 'pascalCase', filesName: "entities"},
				scripts: {src: "src/templates/entity/scripts/**", dest: "/scripts/", filesNameCase: 'paramCase', filesName: "entities", addBaseName: false}
			}
		},
		entity: {name: "", paramCase: '', pascalCase: ''},
		entities: {name: "", paramCase: '', pascalCase: ''},
		script: {
			schema: "",
			primaryKey: "id",
			columns: [],
			column: function (name, type, nullable, defaultValue, autoIncrement) {
				let cr = this.columns.length ? "\n\t" : "";
				let column = cr + '`' + name + '` ' +
					type.toUpperCase() +
					(nullable ? '' : ' NOT NULL') +
					(defaultValue ? ' DEFAULT ' + defaultValue : '') +
					(autoIncrement ? ' AUTO_INCREMENT' : '');
				this.columns.push(column);
			},
			build: function () {
			}
		},
		model: {
			fields: '',
			constructor: '',
			build: function () {
			},
			regular: function (name, optional, type) {
				let field = name + (optional ? "?" : "") + ": " + type;
				config.model.fields += "\t" + field + ";\n";
			},
			expression: function (name, optional, type, expression) {
				let constructor = "\t\tObject.defineProperty(this, '" + name + "', {";
				constructor += "\n\t\t\tget() {";
				constructor += "\n\t\t\t\treturn " + expression;
				constructor += "\n\t\t\t}";
				constructor += "\n\t\t});\n";
				config.model.constructor += constructor;
			}
		},
		uiConfig: {
			columns: "",
			column: function (name, header, width, sortable, editable) {
				this.columns += "\t\tthis.addColumn({field: '" + name + "', header: '" + header + "', sortable: " + sortable + ", width: '" + width + "', editable:" + editable + "});\n";
			},
			build: function () {

			}
		},
		form: {
			html: {
				header: "",
				content: "",
				footer: ""
			},
			inputText: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;'
				this.html[where] += '\n\t\t<input pInputText id="' + field + '"  class="ui-inputtext" autocomplete="off" [(ngModel)]="config.data.item[\'' + field + '\']"/>';
				this.html[where] += '\n\t</div>';
			},
			toggleButton: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;'
				this.html[where] += '\n\t\t<p-toggleButton  id="' + field + '"  class="ui-togglebutton"  [(ngModel)]="config.data.item[\'' + field + '\']"></p-toggleButton>';
				this.html[where] += '\n\t</div>';
			},
			inputTextarea: function (where, field, title, model) {
				this.html[where] += '\n\t<div class="ui-g-12">';
				this.html[where] += '\n\t\t<label for="' + field + '">' + title + '</label>;';
				this.html[where] += '\n\t\t<textarea pInputTextarea id="' + field + '" class="ui-inputtextarea"  [(ngModel)]="config.data.item[\'' + field + '\']"></textarea>';
				this.html[where] += '\n\t</div>';
			},
			custom: function (where, html) {
				this.html[where] += html;
			},
			button: function (where, attrs, innerHTML) {
				let attrsList = ["type='button'", 'pButton'];
				Object.keys(attrs).forEach(attr=>{
					attrsList.push( attr + (attrs[attr] !== undefined?  "='" + attrs[attr]+"'":''));
				})
				this.html[where] += '\n\t\t<button ' + attrsList.join(' ') + '>'+(innerHTML?innerHTML:'') +'</button>';
			},
			build: function () {
			}
		}
	};
	return config;
};
