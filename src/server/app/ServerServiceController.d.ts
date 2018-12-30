import { Application, NextFunction, Request, Response } from 'express';
import { ServerController } from '@server/app/ServerController';
import { ServerService } from '@server/app/ServerService';
import { ServerRepository } from '@server/app/ServerRepository';
export declare class ServerServiceController<M, S extends ServerService<M, R>, R extends ServerRepository> extends ServerController {
    protected app: Application;
    protected service: S;
    constructor(app: Application, controllerRoute: any);
    getAll(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response): void;
    post(req: Request, res: Response): void;
    put(req: Request, res: Response): void;
}
