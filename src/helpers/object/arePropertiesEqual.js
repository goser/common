"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arePropertiesEqual = void 0;
function arePropertiesEqual(a, b) {
    return !Object.keys(a).find(function (key) { return a[key] !== b[key]; });
}
exports.arePropertiesEqual = arePropertiesEqual;
