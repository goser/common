export function sleep(duration: number = 1000) {
    return new Promise<void>((resolve) => {
        setTimeout(() => resolve(), duration)
    })
}