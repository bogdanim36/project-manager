var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { UserService } from '@app/pages/users/user.service';
var UsersIndexComponent = /** @class */ (function () {
    function UsersListComponent(userSrv) {
        this.userSrv = userSrv;
    }
    UsersListComponent.prototype.ngOnInit = function () {
    };
    var _a;
    UsersListComponent = __decorate([
        Component({
            selector: 'app-users-index',
            templateUrl: './users-index.component.html',
            styleUrls: ['./users-index.component.scss']
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof UserService !== "undefined" && UserService) === "function" ? _a : Object])
    ], UsersListComponent);
    return UsersListComponent;
}());
export { UsersIndexComponent };
//# sourceMappingURL=projects-index.component.js.mapmap