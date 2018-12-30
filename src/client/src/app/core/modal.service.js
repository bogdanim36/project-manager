var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { ConfirmationService } from "primeng/api";
var ModalService = /** @class */ (function () {
    function ModalService(confirmSrv) {
        this.confirmSrv = confirmSrv;
    }
    ModalService.prototype.confirm = function (message, header, acceptLabel, rejectLabel, successCallback, rejectCallbac, acceptVisible) {
        if (header === void 0) { header = 'Alert'; }
        if (acceptLabel === void 0) { acceptLabel = 'OK'; }
        return this.confirmSrv.confirm({
            header: header,
            message: message,
            acceptLabel: acceptLabel,
            rejectLabel: rejectLabel,
            accept: successCallback,
            reject: rejectCallbac
        });
    };
    ModalService.prototype.alert = function (message, header, buttonLabel, icon, callback) {
        if (header === void 0) { header = 'Alert'; }
        if (buttonLabel === void 0) { buttonLabel = 'OK'; }
        if (icon === void 0) { icon = ""; }
        return this.confirmSrv.confirm({
            header: header,
            message: message,
            acceptLabel: buttonLabel,
            acceptVisible: true,
            rejectVisible: false,
            accept: callback,
            icon: icon
        });
    };
    ModalService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [ConfirmationService])
    ], ModalService);
    return ModalService;
}());
export { ModalService };
//# sourceMappingURL=modal.service.js.map