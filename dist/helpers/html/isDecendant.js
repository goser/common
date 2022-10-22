"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDecendant = void 0;
var isDecendant = function (parent, child) {
    var node = child;
    while (node) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
exports.isDecendant = isDecendant;
