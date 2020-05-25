var generateAttrValue = function (name) {
    var _a;
    if (!name) {
        return null;
    }
    return _a = {},
        _a[name] = true,
        _a;
};
var delay = function (fn, t) {
    if (t === void 0) { t = 100; }
    return new Promise(function (resolve) {
        setTimeout(function () {
            fn();
            resolve();
        }, t);
    });
};
export { delay as d, generateAttrValue as g };
