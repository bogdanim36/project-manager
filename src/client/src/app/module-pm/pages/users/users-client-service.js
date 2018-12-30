var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { EntityService } from '@app/core/entity.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../../../../../shared/user';
var UsersClientService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http) {
        var _this = _super.call(this, http, 'users') || this;
        _this.http = http;
        _this.items.push(new User({ lastName: 'Ionescu', firstName: 'Bogdan', email: 'bogdanim36@gmail.com', id: 1 }));
        return _this;
    }
    UserService = __decorate([
        Injectable({ providedIn: 'root' }),
        __metadata("design:paramtypes", [HttpClient])
    ], UserService);
    return UserService;
}(EntityService));
export { UsersClientService };
//# sourceMappingURL=UsersClientService.jsce.js.map