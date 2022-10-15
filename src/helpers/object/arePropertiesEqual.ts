export function arePropertiesEqual<T1 extends object, T2 extends T1>(a: T1, b: T2): boolean {
    return !Object.keys(a).find(key => (a as any)[key] !== (b as any)[key]);
}