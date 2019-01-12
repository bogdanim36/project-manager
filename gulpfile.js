var gulp = require('gulp'),
	{src, dest} = require('gulp'),
	fs = require('fs-sync'),
	cb = require('cb'),
	argv = require('yargs').argv,
	gulpData = require('gulp-data'),
	gulpIf = require('gulp-if'),
	template = require('gulp-template'),
	rename = require('gulp-rename'),
	path = require('path'),
	changeCase = require('change-case'),
	exec = require('child_process').exec;


gulp.task('build-prod', (callback) => {
	process.chdir('src/client');
	console.log("start building");
	exec('ng build --prod', (err, stdout, sterr) => {
		console.log(stdout);
		console.log(sterr);
		cb('err');
		process.chdir('../..');
		exec('npm run  server:build-prod', (err, stdout, sterr) => {
			console.log("server build finished");
			console.log(stdout);
			console.log(sterr);
			cb('err');
			fs.copy('src/server/dist/prod/server.js', 'dist/server.js');
			fs.copy('src/server/dist/prod/server.js.map', 'dist/server.js.map');
			fs.copy('src/server/package.json', 'dist/package.json');
			process.chdir('dist');
			exec('npm install --only=prod', (err, stdout, sterr) => {
				console.log(stdout);
				console.log(sterr);
				cb('err');
				callback();
			});
		});
	});
});

gulp.task("gen:entity", (callback) => {
	let config = require(argv.config)();
	let moduleNames = Object.keys(config.paths.modules);
	if (!config.entity) throw "No entity argument provided";
	if (!config.entities) throw "No entities argument provided";
	let nameCases = {};
	console.log('nameCases', nameCases);
	moduleNames.forEach(moduleName => {
		let module = config.paths.modules[moduleName];
		nameCases[module.filesNameCase] = '';
	});
	// create all nameCases if not exists
	console.log('nameCases', nameCases);
	Object.keys(nameCases).forEach((nameCase) => {
		console.log('nameCase', nameCase);
		if (!config.entity[nameCase]) config.entity[nameCase] = changeCase[nameCase](config.entity.name)
		if (!config.entities[nameCase]) config.entities[nameCase] = changeCase[nameCase](config.entities.name)
	});
	config.build();
	moduleNames.forEach((moduleName) => {
		let module = config.paths.modules[moduleName];
		gulp.src(module.src)
			.pipe(gulpData(() => config))
			.pipe(template())
			.pipe(rename((file) => {
				if (file.extname === '') return;
				let baseName = module.addBaseName === false ? "" : file.basename;
				file.basename = config[module.filesName][module.filesNameCase] + (module.filesNameCase === 'paramCase' && baseName ? "-" : "") + baseName;
			}))
			.pipe(gulp.dest(config.paths.destRoot + module.dest + (module.entitiesSubdir ? config.entities.paramCase : "")));
	});
	callback();
});
