export type WithoutOptional<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
