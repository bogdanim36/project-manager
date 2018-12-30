import {ServerApp} from '@server/app/ServerApp';
import {UsersServerController} from '@module/users/UsersServerController';
import {ProjectsServerController} from '@module/projects/ProjectsServerController';
const server = new ServerApp();
const app = server.getApp();
const users = new UsersServerController(app, server.store);
const projects = new ProjectsServerController(app, server.store);
server.start();
export { app };
