let counter = 0;
export function uid(key) {
    return (key || '') + '_' + (++counter + Math.random()).toString(36);
}
