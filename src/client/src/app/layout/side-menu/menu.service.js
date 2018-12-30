var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MenuItems } from "../../app-routing.module";
var MenuService = /** @class */ (function () {
    function MenuService(http) {
        this.http = http;
        this.url = "./assets/menu.json";
        // this.getJSON(this.url);
        this.items = MenuItems;
    }
    MenuService.prototype.getJSON = function (url) {
        var _this = this;
        console.log("url", url);
        return this.http.get(url).subscribe(function (data) {
            console.log("menu columns", data);
            _this.columns = data;
        });
    };
    MenuService = __decorate([
        Injectable(),
        __metadata("design:paramtypes", [HttpClient])
    ], MenuService);
    return MenuService;
}());
export { MenuService };
//# sourceMappingURL=menu.service.js.map