import {cloneObject} from './cloneObject';

type Acceptable = object | Array<any>;

export function mergeObjects<T1 extends Acceptable, T2 extends Acceptable>(obj1: T1, obj2: T2): T1 & T2 {
    if (Array.isArray(obj1) || typeof obj1 !== 'object') {
        return cloneObject(obj2) as any;
    }
    const result: any = {};
    Object.keys(obj2 as object).forEach(propertyName => {
        if (!(propertyName in obj1)) {
            result[propertyName] = cloneObject((obj2 as any)[propertyName]);
        }
    });
    Object.keys(obj1 as object).forEach(propertyName => {
        const value1 = (obj1 as any)[propertyName];
        if (propertyName in obj2) {
            const value2 = (obj2 as any)[propertyName];
            if (value2 !== undefined) {
                if (value1 === null || value1 === undefined) {
                    result[propertyName] = cloneObject(value2);
                } else {
                    result[propertyName] = mergeObjects(value1, value2);
                }
            } else {
                // remove value
            }
        } else {
            result[propertyName] = cloneObject(value1);
        }
    });
    return result as any;
}
