"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cls = void 0;
function cls() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.filter(function (arg) { return !!arg; }).map(function (arg) { return '' + arg; }).join(' ');
}
exports.cls = cls;
