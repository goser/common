"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pushStateReactWorkaround = void 0;
var flag = false;
/**
 * This is a replacement/wrapper for history.pushState when used in react.
 * It prevents pushState to be called twice in one render run.
 * React does some actions behind the scenes that results in calls that capture console outputs.
 */
var pushStateReactWorkaround = function (state, title, url) {
    if (!flag) {
        window.history.pushState(state, title, url);
        flag = true;
        requestAnimationFrame(function () { return flag = false; });
    }
    else {
        window.history.replaceState(state, title, url);
    }
};
exports.pushStateReactWorkaround = pushStateReactWorkaround;
