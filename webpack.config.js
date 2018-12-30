const path = require('path');
const fs = require("fs");
var webpack = require('webpack');
module.exports = function (env, argv) {
	console.log("env", env);
	return {
		mode: env.production ? 'production' : 'development',
		devtool: env.production ? 'source-maps' : 'eval',
		target: "node",
		entry: './src/server/index.ts',
		watch:true,
		output: {
			path: path.resolve(__dirname, 'dist'),
			filename: "server-bundle.js",
			libraryTarget: 'commonjs'
		},
		node: {
			console: false,
			global: false,
			process: false,
			__filename: false,
			__dirname: false,
			Buffer: false,
			setImmediate: true
		},
		externals: fs.readdirSync("./node_modules")
			.reduce(function (acc, mod) {
				if (mod === ".bin") {
					return acc
				}
				acc[mod] = "commonjs " + mod;
				return acc
			}, {}),
		resolve: {
			extensions: [
				'.webpack.js',
				'.web.js',
				".ts",
				".js",
				".json",
			],
			alias:{
				'@server':path.resolve(__dirname, './src/server/'),
				'@module':path.resolve(__dirname, './src/server/app/pm/'),
				'@shared':path.resolve(__dirname, './src/shared/')
			}
		},
		module: {
			rules: [
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: /node_modules/
				}
			]
		},
		devServer: {
			contentBase: false,
			compress: false,
			port: 9000,
			historyApiFallback: true,
			open: false,
			overlay: {
				warnings: true,
				errors: true
			}
		}
	};
};