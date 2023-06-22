"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pickRandom = void 0;
var pickRandom = function (from) { return from[Math.floor(Math.random() * from.length)]; };
exports.pickRandom = pickRandom;
