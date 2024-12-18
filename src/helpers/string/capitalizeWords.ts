export function capitalizeWords(input: string) {
    return input.toLowerCase()
        .replace(
            /(^[a-zA-Z])|\s[a-zA-Z]/g,
            (match: string, char: string) => match.toUpperCase()
        );
}