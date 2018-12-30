import { Response } from 'express';
export declare class ServerResponse {
    static success(res: Response, data: any, extra?: any): void;
    static error(res: Response, err: any): void;
    static validateError(err: any, res: Response): void;
}
