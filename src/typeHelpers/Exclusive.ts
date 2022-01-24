import {WithoutOptional} from './WithoutOptional';

export type Exclusive<T, U> = (T | U) extends object ? (WithoutOptional<T, U> & U) | (WithoutOptional<U, T> & T) : T | U;
