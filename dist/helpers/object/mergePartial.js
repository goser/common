import {} from '../../typeHelpers';
import { mergeObjects } from './mergeObjects';
export function mergePartial(obj1, obj2) {
    if (obj2 === null || typeof obj2 === 'undefined') {
        return obj1;
    }
    return mergeObjects(obj1, obj2);
}
