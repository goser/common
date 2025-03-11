export function freeze() {
    return new Promise(() => {
        setInterval(() => { }, 10000000);
    });
}
