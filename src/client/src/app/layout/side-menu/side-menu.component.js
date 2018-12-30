var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectorRef, Component } from '@angular/core';
import { DeviceDetectorService } from "ngx-device-detector";
import { MenuService } from "./menu.service";
var SideMenuComponent = /** @class */ (function () {
    function SideMenuComponent(changeDetectorRef, deviceService, menuSrv) {
        this.deviceService = deviceService;
        this.menuSrv = menuSrv;
        this.isMobile = false;
        this.isTablet = false;
        this.isDesktop = false;
        this.epicFunction();
        this.menuSrv.items;
    }
    SideMenuComponent.prototype.ngOnDestroy = function () {
    };
    SideMenuComponent.prototype.epicFunction = function () {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        this.isMobile = this.deviceService.isMobile();
        this.isTablet = this.deviceService.isTablet();
        this.isDesktop = this.deviceService.isDesktop();
    };
    SideMenuComponent = __decorate([
        Component({
            selector: 'app-side-menu',
            templateUrl: 'side-menu.component.html',
            styleUrls: ['side-menu.component.scss'],
        }),
        __metadata("design:paramtypes", [ChangeDetectorRef, DeviceDetectorService, MenuService])
    ], SideMenuComponent);
    return SideMenuComponent;
}());
export { SideMenuComponent };
//# sourceMappingURL=side-menu.component.js.map