"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDescendant = void 0;
var isDescendant = function (parent, child) {
    var node = child;
    while (node) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
exports.isDescendant = isDescendant;
