export function arePropertiesEqual(a, b) {
    return !Object.keys(a).find(key => a[key] !== b[key]);
}
