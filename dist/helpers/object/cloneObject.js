/**
 * Helper method for cloning simple javascript types and objects.
 * @param  input  object to clone
 * @return        cloned object
 */
export function cloneObject(input) {
    if (Array.isArray(input)) {
        return input.map(cloneObject);
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
            const result = {};
            Object.entries(input).forEach(([key, value]) => {
                result[key] = cloneObject(value);
            });
            return result;
    }
    throw Error('unhandled input' + input);
}
