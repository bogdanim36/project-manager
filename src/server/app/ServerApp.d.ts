import { Application } from 'express';
import { ServerStore } from '@server/app/ServerStore';
export declare class ServerApp {
    private app;
    private port;
    private apiConfig;
    private menu;
    store: ServerStore;
    constructor();
    private createApp;
    private config;
    start(): void;
    getApp(): Application;
}
