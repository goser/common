"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrientationLandscape = void 0;
var isOrientationLandscape = function () {
    return window.matchMedia('(orientation: landscape)').matches;
};
exports.isOrientationLandscape = isOrientationLandscape;
