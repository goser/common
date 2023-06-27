"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMobile = void 0;
var isMobile = function () {
    // detects the primary pointer resolution
    return window.matchMedia('(pointer: coarse)').matches;
};
exports.isMobile = isMobile;
