import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
var ClientService = /** @class */ (function () {
    function EntityService(http, controller) {
        this.http = http;
        this.controller = controller;
        this._items = [];
        this.subscriptions = [];
        this.urls = {};
        this.currentPage = 0;
        this.lastPage = 0;
        this.totalItems = 0;
        this.perPage = 0;
        this.requests = {};
    }
    // build request url based on baseRoute or config urls
    EntityService.prototype.getUrl = function (method, id) {
        if (id === void 0) { id = null; }
        var url = null;
        if (this.urls[method])
            url = (environment.apiUrl ? environment.apiUrl : "") + '/' + this.urls[method];
        else {
            url = this.controller + '/' + method;
            if (!this.controller)
                console.error('Must define a baseRoute or urls for method: ', method);
        }
        return url;
    };
    // method to define params for getAll method
    EntityService.prototype.getAllApiArgs = function () {
        return {};
    };
    EntityService.prototype.getAllCalback = function (response) {
        var _this = this;
        if (response && response.total !== undefined) {
            console.log('get columns length', this._items.length, response.data.length);
            this._items = this._items.concat(response.data);
            this.subscriptions.forEach(function (callback) {
                callback(_this._items);
            });
        }
        else
            console.error('Error retriving columns');
    };
    EntityService.prototype.subscribe = function (reference) {
        this.subscriptions.push(reference);
    };
    EntityService.prototype.getAll = function (params, reload) {
        // requestId is in progress
        // can send as param or load with this.getAllApiArgs()
        if (reload === void 0) { reload = false; }
        // console.log('getAll params', this.requestId);
        params = params === undefined ? this.getAllApiArgs() : params;
        if (this.requestId) {
            // set request as cleared - so nu response will be considered
            this.requests[this.requestId] = true;
            clearTimeout(this.requestId);
            console.log('clear timeout', this.requestId, this.requests[this.requestId]);
            this.requestId = null;
        }
        // if timeout si to low, for large dataset, can happen
        var clone = Object.assign(params, {});
        this.requestId = this.timeoutRequest(params, reload);
        // this.requestId = setTimeout(() => this.getAllRequest(params, reload), 200);
        clone.requestId = this.requestId;
        // console.log('this.requestId', this.requestId, clone);
    };
    EntityService.prototype.timeoutRequest = function (params, reload) {
        var _this = this;
        var requestId = setTimeout(function () { return _this.getAllRequest(params, reload, requestId); }, 200);
        return requestId;
    };
    EntityService.prototype.getAllRequest = function (params, reload, requestId) {
        var _this = this;
        var httpParams = new HttpParams();
        Object.keys(params).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        });
        var url = this.getUrl('getAll');
        // console.log('request ', url, params);
        return this.http.get(url, { params: httpParams }).subscribe(function (response) {
            // console.log('response for ', url, requestId, this.requests, params);
            if (_this.requests[requestId])
                return;
            _this.requestId = null;
            if (response && response.current_page) {
                var paginateResponse = response;
                _this.currentPage = paginateResponse.current_page;
                _this.lastPage = paginateResponse.last_page;
                _this.urls.nextPage = paginateResponse.next_page_url;
                _this.urls.prevPage = paginateResponse.prev_page_url;
                _this.totalItems = paginateResponse.total;
                _this.perPage = paginateResponse.per_page;
            }
            if (reload)
                _this._items = [];
            _this.getAllCalback(response);
        });
    };
    EntityService.prototype.nextPage = function (filters) {
        if (this.currentPage === this.lastPage)
            return false;
        this.getAll({ page: this.currentPage + 1 });
        return true;
    };
    EntityService.prototype.getOne = function (id) {
        return this.http.get("" + this.controller + id).subscribe(function (response) {
            if (response.status)
                return response.data;
            else
                return null;
        });
    };
    Object.defineProperty(EntityService.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    EntityService.prototype.clearItems = function () {
        this._items = [];
    };
    EntityService.prototype.reload = function () {
        this.getAll(this.getAllApiArgs(), true);
    };
    return EntityService;
}());
export { ClientService };
//# sourceMappingURL=client-service.jss.map