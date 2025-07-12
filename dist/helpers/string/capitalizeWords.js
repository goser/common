export function capitalizeWords(input) {
    return input.toLowerCase()
        .replace(/(^[a-zA-Z])|\s[a-zA-Z]/g, (match) => match.toUpperCase());
}
