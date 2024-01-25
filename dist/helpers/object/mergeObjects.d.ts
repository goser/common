type Acceptable = object | Array<any>;
export declare function mergeObjects<T1 extends Acceptable, T2 extends Acceptable>(obj1: T1, obj2: T2): T1 & T2;
export {};
