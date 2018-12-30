var StorageService = /** @class */ (function () {
    function StorageService() {
        this.loaded = false;
    }
    StorageService.prototype.getItem = function (name) {
        var value = localStorage[name] && localStorage[name] !== 'undefined' ? JSON.parse(localStorage.getItem(name)) : {};
        return value;
    };
    StorageService.prototype.setItem = function (name, value) {
        localStorage.setItem(name, JSON.stringify(value));
    };
    StorageService.prototype.removeItem = function (name) {
        localStorage.removeItem(name);
    };
    StorageService.prototype.clear = function () {
        localStorage.clear();
    };
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map