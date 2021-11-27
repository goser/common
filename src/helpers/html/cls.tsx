export function cls(...args:any[]) {
    return args.filter(arg=>!!arg).map(arg=>''+arg).join(' ');
}