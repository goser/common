"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.range = void 0;
var range = function (start, end, step) {
    if (step === void 0) { step = 1; }
    var output = [];
    if (typeof end === 'undefined') {
        end = start;
        start = 0;
    }
    for (var i = start; i < end; i += step) {
        output.push(i);
    }
    return output;
};
exports.range = range;
