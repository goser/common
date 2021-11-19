"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergePartial = void 0;
var mergeObjects_1 = require("./mergeObjects");
function mergePartial(obj1, obj2) {
    if (typeof obj2 === 'undefined') {
        return obj1;
    }
    return (0, mergeObjects_1.mergeObjects)(obj1, obj2);
}
exports.mergePartial = mergePartial;
