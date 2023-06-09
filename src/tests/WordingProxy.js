"use strict";
// this wording proxy will not work with react because it uses function as target and functions are not allowed as
// children in react components
// just keeping it for the experience
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWordingProxy = void 0;
var proxyHandler = {
    get: function (target, propertyName, receiver) {
        console.log('proxyHandler.get ', propertyName, target);
        if (typeof propertyName === 'string') {
            // if (['asymmetricMatch'].includes(propertyName)) {
            //     return target[propertyName];
            // }
            if (['valueOf', 'toString', 'toSource', 'inspect', 'constructor'].includes(propertyName)) {
                return function () { return target.____fullName____; };
            }
            // if (['$$typeof'].includes(propertyName)) {
            //     return () => 'string';
            // }
            var fullName = target.____fullName____;
            if (parseInt(propertyName).toString() === propertyName) {
                fullName += '[' + propertyName + ']';
            }
            else {
                fullName += '.' + propertyName;
            }
            return createProxy(fullName, propertyName);
        }
        if ([Symbol.toStringTag, Symbol.toPrimitive].includes(propertyName)) {
            return function () { return target.____fullName____; };
        }
        // return target.____fullName____;
    },
    apply: function (target, thisArg, argArray) {
        console.log('proxyHandler.apply ', target.____fullName____);
        var args = argArray.map(function (arg) {
            if (typeof arg === 'string') {
                return "'".concat(arg, "'");
            }
            return arg;
        }).join(', ');
        return "".concat(target.____fullName____, "(").concat(args, ")");
    },
    has: function (target, p) {
        console.log('proxyHandler.has');
        return false;
    },
    // getOwnPropertyDescriptor(target: any, propertyName: string | symbol): PropertyDescriptor | undefined {
    //     console.log('proxyHandler.getOwnPropertyDescriptor');
    //     if (['____fullName____']) {
    //         return {};
    //     }
    //     return undefined;
    // },
    getPrototypeOf: function (target) {
        console.log('proxyHandler.getPrototypeOf', target);
        return {};
    },
    ownKeys: function (target) {
        console.log('proxyHandler.ownKeys');
        return ['____fullName____', '____name____'];
    },
};
var createProxy = function (fullName, name) {
    var valueOf = function () {
        console.log('valueOf called for ' + fullName);
        return fullName;
    };
    var target = function () {
    };
    // target['____fullName____'] = fullName;
    // target['____name____'] = name;
    // valueOf: valueOf,
    // toString: valueOf,
    // toSource: valueOf,
    // inspect: valueOf,
    Object.defineProperties(target, {
        ____fullName____: { configurable: false, enumerable: true, value: fullName, writable: false },
        ____name____: { configurable: false, enumerable: true, value: name, writable: false },
        // name: {configurable: false, enumerable: true, value: fullName, writable: false},
        // toSource: {configurable: false, enumerable: true, writable: false, value: valueOf},
    });
    // target.toSource = ()=> fullName;
    // target['valueOf'] = valueOf;
    // target['toString'] = valueOf;
    // target['toSource'] = valueOf;
    // target['inspect'] = valueOf;
    return new Proxy(target, proxyHandler);
};
var createWordingProxy = function (name) {
    return createProxy(name, name);
};
exports.createWordingProxy = createWordingProxy;
