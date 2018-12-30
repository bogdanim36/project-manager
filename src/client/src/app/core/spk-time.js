var SpkTime = /** @class */ (function () {
    function SpkTime(hours, minutes) {
        this._hours = 0;
        this._minutes = 0;
        this._value = 0;
        if (arguments.length === 2) {
            this.hours = hours;
            this._minutes = minutes;
        }
        else {
            this.value = hours;
        }
    }
    Object.defineProperty(SpkTime.prototype, "value", {
        get: function () {
            return (this.hours * 60 + this.minutes) / 60;
        },
        set: function (value) {
            this.hours = Math.floor(value);
            this.minutes = Math.floor((value - this._hours) * 60);
        },
        enumerable: true,
        configurable: true
    });
    SpkTime.prototype.format = function () {
        var hours = this.hours;
        var mins = this.minutes;
        var formated = hours.toString().padStart(2, '0') + 'h ';
        formated += mins.toString().padStart(2, '0') + 'm';
        return formated;
    };
    Object.defineProperty(SpkTime.prototype, "hours", {
        get: function () {
            return this._hours;
        },
        set: function (hours) {
            this._hours = Math.floor(hours);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SpkTime.prototype, "minutes", {
        get: function () {
            return this._minutes;
        },
        set: function (mins) {
            this._minutes = Math.floor(mins);
        },
        enumerable: true,
        configurable: true
    });
    return SpkTime;
}());
export { SpkTime };
//# sourceMappingURL=spk-time.js.map