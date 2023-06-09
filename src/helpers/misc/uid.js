"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uid = void 0;
var counter = 0;
function uid(key) {
    return (key || '') + '_' + (++counter + Math.random()).toString(36);
}
exports.uid = uid;
