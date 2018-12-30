"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(source) {
        this.email = '';
        this.firstName = '';
        this.lastName = '';
        Object.assign(this, source);
    }
    Object.defineProperty(User.prototype, "fullName", {
        get: function () {
            return this.firstName.trim() + (this.lastName ? ' ' + this.lastName.trim() : '');
        },
        enumerable: true,
        configurable: true
    });
    return User;
}());
exports.User = User;
//# sourceMappingURL=user.js.map