export function parseIntSafe(value, fallback) {
    const parsed = parseInt(value, 10);
    return isNaN(parsed) ? fallback : parsed;
}
