import * as moment from 'moment';
var SpkDate = /** @class */ (function () {
    function SpkDate(value, format) {
        this.value = value;
        if (format)
            this.value = moment(value, format).toDate();
    }
    Object.defineProperty(SpkDate.prototype, "Hours", {
        get: function () {
            return this.value.getHours();
        },
        set: function (value) {
            this.value.setHours(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpkDate.prototype, "Minutes", {
        get: function () {
            return this.value.getMinutes();
        },
        set: function (value) {
            this.value.setMinutes(value);
        },
        enumerable: true,
        configurable: true
    });
    SpkDate.prototype.toString = function () {
        return this.value.toString();
    };
    return SpkDate;
}());
export { SpkDate };
//# sourceMappingURL=spk-date.js.map