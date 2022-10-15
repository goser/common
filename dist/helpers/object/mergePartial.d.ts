import { DeepPartial } from '../../typeHelpers';
declare type Acceptable = object | Array<any>;
export declare function mergePartial<T extends Acceptable>(obj1: T, obj2: DeepPartial<T> | undefined | null): T;
export {};
