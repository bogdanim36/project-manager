import { ServerService } from '@server/app/ServerService';
import { ProjectsServerRepository } from './ProjectsServerRepository';
import { ServerStore } from '@server/app/ServerStore';
import { Project } from '@shared/project';
export declare class ProjectsServerService extends ServerService<Project, ProjectsServerRepository> {
    protected store: ServerStore;
    repository: ProjectsServerRepository;
    constructor(store: ServerStore);
}
