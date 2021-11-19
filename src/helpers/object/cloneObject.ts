/**
 * Helper method for cloning simple javascript types and objects.
 * @param  input  object to clone
 * @return        cloned object
 */
export function cloneObject<T extends unknown>(input:T):T {
    if (Array.isArray(input)) {
        return (input as any[]).map(cloneObject) as T;
    }
    if (input === null) {
        return input;
    }
    switch (typeof input) {
        case 'string':
        case 'boolean':
        case 'bigint':
        case 'number':
        case 'function':
        case 'undefined':
        case 'symbol':
            return input;
        case 'object':
            const result : any = {};
            Object.entries(input as any).forEach(([key, value])=>{
                result[key] = cloneObject(value);
            });
            return result as T;
    }
    throw Error('unhandled input' + input);
}
