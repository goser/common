export const isMobile = () =>
    // detects the primary pointer resolution
    window.matchMedia('(pointer: coarse)').matches;