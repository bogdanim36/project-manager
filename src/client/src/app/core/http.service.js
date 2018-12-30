import { HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
var HttpService = /** @class */ (function () {
    function HttpService(http, controller) {
        this.http = http;
        this.controller = controller;
        this.urls = {};
    }
    // build request url based on baseRoute or config urls
    HttpService.prototype.getUrl = function (method, id) {
        if (id === void 0) { id = null; }
        var url = environment.apiUrl + '/';
        if (this.urls[method])
            url += this.urls[method];
        else {
            if (this.controller)
                url += this.controller + '/';
            url += method;
            if (!this.controller)
                console.error('Must define a baseRoute or urls for method: ', method);
        }
        return url;
    };
    HttpService.prototype.get = function (method, params, reload) {
        if (reload === void 0) { reload = false; }
        var httpParams = new HttpParams();
        Object.keys(params || {}).forEach(function (key) {
            httpParams = httpParams.append(key, params[key]);
        });
        var url = this.getUrl(method);
        return this.http.get(url, { params: httpParams });
    };
    return HttpService;
}());
export { HttpService };
//# sourceMappingURL=http.service.js.map