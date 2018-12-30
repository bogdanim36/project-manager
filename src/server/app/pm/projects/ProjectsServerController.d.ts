import { ServerServiceController } from '@server/app/ServerServiceController';
import { ServerStore } from '@server/app/ServerStore';
import { Project } from '@shared/project';
import { ProjectsServerRepository } from '@module/projects/ProjectsServerRepository';
import { ProjectsServerService } from '@module/projects/ProjectsServerService';
export declare class ProjectsServerController extends ServerServiceController<Project, ProjectsServerService, ProjectsServerRepository> {
    protected app: any;
    private store;
    service: ProjectsServerService;
    constructor(app: any, store: ServerStore);
}
