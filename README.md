# Project Manager
I started this project as a pretext for deepening of technologies and tools: Typescript , Angular7, Express NodeJS, Webpack, PrimeNg.
Objectives:
 - using typescript not only on client side, but server side too. Done. 
 - having a shared folder for models and other useful code on both sides: client and server. Done.
 - use automatic nodejs server update with nodemon and webpack and use angular live dev server with proxy having separated node modules packages for client and server side. Also creating gulp task for production build.Done.
 - create generic classes for Server side (separation of concerns pattern design): Controller, Service, Repository. Done.
 - create generic class for Client side: entity typed generic service. Done. 
 - create generic layout for applications with left side slide tree menu. Done;
 - create components to generate list for desktop and mobile devices, edit entity form - work in progress.
 
 <h2>Installing and run project</h2>
<br>  1. clone this repository
<br>  2. run npm install in project folder, src/client and src/server folders.
<br>  3. create database with db-scripts/init-db.sql
<br>  4. create tables with db-scripts/create-tables.sql
<br>  5. run npm server:build-dev. This will create dist/server.js
<br>  6. run npm server:start-dev. This will start nodeJs api server.
<br>  7. run npm client:start. This will run ng serve with proxy config (src/client/proxy.conf.json).
<br>  8. View app on http://localhost:4201
<br>  9. For production build run gulp build-prod. This will ruin build for client and server side and copy source files in dist folder
