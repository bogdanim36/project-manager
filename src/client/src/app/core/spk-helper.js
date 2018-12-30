export var SpkHelper;
(function (SpkHelper) {
    function ObjectAssign(target, source, extra) {
        extra = extra ? extra : {};
        var fields = Object.keys(source);
        fields = fields.concat(Object.keys(extra));
        fields.forEach(function (key) {
            target[key] = source[key];
        });
        return target;
    }
    SpkHelper.ObjectAssign = ObjectAssign;
})(SpkHelper || (SpkHelper = {}));
//# sourceMappingURL=spk-helper.js.map