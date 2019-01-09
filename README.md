# Project Manager
I started this project as a pretext for deepening of technologies and tools: Typescript , Angular7, Express NodeJS, Webpack, PrimeNg.
Objectives:
 - using typescript not only on client side, but server side too. Done. 
 - having a shared folder for models and other useful code on both sides: client and server. Done.
 - use automatic nodejs server update with nodemon and webpack and use angular live dev server with proxy having separated node modules packages for client and server side. Also creating gulp task for production build. Done.
 - create automation task and scripts for development and production mode
 - create generic classes for Server side (separation of concerns pattern design having generic CRUD operation): Controller, Service, Repository. Done.
 - create generic class for Client side: entity typed generic service. Done. 
 - create generic layout for applications with left side slide tree menu. Done;
 - create components to generate list for desktop and mobile devices, edit entity form - work in progress.
 
 <h2>Installing and run project</h2>
<br>  01. Clone this repository.
<br>  02. Create database with db-scripts/init-db.sql.
<br>  04. Create tables with db-scripts/create-tables.sql
<br>  05. Change extends in root tslint.json to you general tslint.json file, or delete extends.
<br>  06. Change server port in src/server/src/ConfigApi.ts and in src/client/proxy.conf.json to the desired one or in packages scripts.
<br>  07. Change angular dev server port in src/client/angular.json, serve.port to the desired one.
<br>  07. Run nmp run install-all script in root folder for install all packages in root, client and server folder.
<br>  08. Run npm server:build-dev. This will create dist/server.js
<br>  09. Run npm server:start-dev. This will start nodeJs api server.
<br>  10. Run npm client:start-dev. This will run ng serve with proxy config (src/client/proxy.conf.json).
<br>  11. View app on http://localhost:4201
<br>  12. For production build run gulp build-prod. This will run build for client and server side and copy source files in dist folder.
<br>  13. Test production with Server:start-prod and Client:start-prod npm scripts.

