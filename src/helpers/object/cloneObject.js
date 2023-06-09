"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneObject = void 0;
/**
 * Helper method for cloning simple javascript types and objects.
 * @param  input  object to clone
 * @return        cloned object
 */
function cloneObject(input) {
    if (Array.isArray(input)) {
        return input.map(cloneObject);
    }
    if (input === null) {
        return input;
    }
    switch (typeof input) {
        case 'string':
        case 'boolean':
        case 'bigint':
        case 'number':
        case 'function':
        case 'undefined':
        case 'symbol':
            return input;
        case 'object':
            var result_1 = {};
            Object.entries(input).forEach(function (_a) {
                var key = _a[0], value = _a[1];
                result_1[key] = cloneObject(value);
            });
            return result_1;
    }
    throw Error('unhandled input' + input);
}
exports.cloneObject = cloneObject;
