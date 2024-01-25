export function cls(...args) {
    return args.filter(arg => !!arg).map(arg => '' + arg).join(' ');
}
