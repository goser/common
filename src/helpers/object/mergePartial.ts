import {type DeepPartial} from '../../typeHelpers'
import {mergeObjects} from './mergeObjects'

type Acceptable = object | Array<any>

export function mergePartial<T extends Acceptable>(obj1: T, obj2: DeepPartial<T> | undefined | null): T {
    if (obj2 === null || typeof obj2 === 'undefined') {
        return obj1
    }
    return mergeObjects(obj1, obj2)
}
