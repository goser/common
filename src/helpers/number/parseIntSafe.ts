export function parseIntSafe(value: string, fallback: number): number {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? fallback : parsed;
}