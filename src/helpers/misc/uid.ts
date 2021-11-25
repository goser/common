let counter = 0;

export function uid(key:string) {
    return (key || '') + '_' + (++counter + Math.random()).toString(36);
}
