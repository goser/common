import { WithoutOptional } from './WithoutOptional';
export declare type Exclusive<T, U> = (T | U) extends object ? (WithoutOptional<T, U> & U) | (WithoutOptional<U, T> & T) : T | U;
