export function freeze() {
    return new Promise<void>(() => {
        setInterval(() => { }, 10000000)
    })
}