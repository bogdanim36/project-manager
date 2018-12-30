import { Application, NextFunction, Request, Response } from 'express';
export declare class ServerController {
    protected app: Application;
    controllerRoute: string;
    constructor(app: Application, controllerRoute: string);
    setDefaultRoutes(): void;
    addRoute(route: string, method: string, callback: Function): void;
    getAll(req: Request, res: Response, next: NextFunction): void;
    post(req: Request, res: Response, next: NextFunction): void;
    put(req: Request, res: Response, next: NextFunction): void;
    delete(req: Request, res: Response, next: NextFunction): void;
    get(req: Request, res: Response): void;
    isAuthenticated(req: any, res: any): boolean;
}
