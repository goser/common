"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isOrientationPortrait = void 0;
var isOrientationPortrait = function () {
    return window.matchMedia('(orientation: portrait)').matches;
};
exports.isOrientationPortrait = isOrientationPortrait;
