import {mergeObjects} from './mergeObjects';
import {DeepPartial} from '../../typeHelpers/DeppPartial';

export function mergePartial<T>(obj1: T, obj2: DeepPartial<T> | undefined | null): T {
    if (typeof obj2 === 'undefined') {
        return obj1;
    }
    return mergeObjects(obj1, obj2);
}
