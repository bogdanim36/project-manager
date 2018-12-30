"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Model = /** @class */ (function () {
    function Model(source, extra) {
        var _this = this;
        var fields = Object.keys(source);
        if (extra)
            fields = fields.concat(Object.keys(extra));
        fields.forEach(function (key) {
            _this[key] = source[key];
        });
        console.log("source", source, this);
    }
    return Model;
}());
exports.Model = Model;
//# sourceMappingURL=model.js.map