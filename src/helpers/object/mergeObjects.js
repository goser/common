"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergeObjects = void 0;
var cloneObject_1 = require("./cloneObject");
function mergeObjects(obj1, obj2) {
    if (Array.isArray(obj1) || typeof obj1 !== 'object') {
        return (0, cloneObject_1.cloneObject)(obj2);
    }
    var result = {};
    Object.keys(obj2).forEach(function (propertyName) {
        if (!(propertyName in obj1)) {
            result[propertyName] = (0, cloneObject_1.cloneObject)(obj2[propertyName]);
        }
    });
    Object.keys(obj1).forEach(function (propertyName) {
        var value1 = obj1[propertyName];
        if (propertyName in obj2) {
            var value2 = obj2[propertyName];
            if (value2 !== undefined) {
                if (value1 === null || value1 === undefined) {
                    result[propertyName] = (0, cloneObject_1.cloneObject)(value2);
                }
                else {
                    result[propertyName] = mergeObjects(value1, value2);
                }
            }
            else {
                // remove value
            }
        }
        else {
            result[propertyName] = (0, cloneObject_1.cloneObject)(value1);
        }
    });
    return result;
}
exports.mergeObjects = mergeObjects;
