import { cloneObject } from './cloneObject';
export function mergeObjects(obj1, obj2) {
    if (Array.isArray(obj1) || typeof obj1 !== 'object') {
        return cloneObject(obj2);
    }
    const result = {};
    Object.keys(obj2).forEach(propertyName => {
        if (!(propertyName in obj1)) {
            result[propertyName] = cloneObject(obj2[propertyName]);
        }
    });
    Object.keys(obj1).forEach(propertyName => {
        const value1 = obj1[propertyName];
        if (propertyName in obj2) {
            const value2 = obj2[propertyName];
            if (value2 !== undefined) {
                if (value1 === null || value1 === undefined) {
                    result[propertyName] = cloneObject(value2);
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
            result[propertyName] = cloneObject(value1);
        }
    });
    return result;
}
