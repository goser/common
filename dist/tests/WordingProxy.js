// this wording proxy will not work with react because it uses function as target and functions are not allowed as
// children in react components
// just keeping it for the experience
const proxyHandler = {
    get: (target, propertyName, receiver) => {
        console.log('proxyHandler.get ', propertyName, target);
        if (typeof propertyName === 'string') {
            // if (['asymmetricMatch'].includes(propertyName)) {
            //     return target[propertyName];
            // }
            if (['valueOf', 'toString', 'toSource', 'inspect', 'constructor'].includes(propertyName)) {
                return () => target.____fullName____;
            }
            // if (['$$typeof'].includes(propertyName)) {
            //     return () => 'string';
            // }
            let fullName = target.____fullName____;
            if (parseInt(propertyName).toString() === propertyName) {
                fullName += '[' + propertyName + ']';
            }
            else {
                fullName += '.' + propertyName;
            }
            return createProxy(fullName, propertyName);
        }
        if ([Symbol.toStringTag, Symbol.toPrimitive].includes(propertyName)) {
            return () => target.____fullName____;
        }
        // return target.____fullName____;
    },
    apply(target, thisArg, argArray) {
        console.log('proxyHandler.apply ', target.____fullName____);
        const args = argArray.map(arg => {
            if (typeof arg === 'string') {
                return `'${arg}'`;
            }
            return arg;
        }).join(', ');
        return `${target.____fullName____}(${args})`;
    },
    has(target, p) {
        console.log('proxyHandler.has');
        return false;
    },
    // getOwnPropertyDescriptor(target: any, propertyName: string | symbol): PropertyDescriptor | undefined {
    //     console.log('proxyHandler.getOwnPropertyDescriptor');
    //     if (['____fullName____']) {
    //         return {};
    //     }
    //     return undefined;
    // },
    getPrototypeOf(target) {
        console.log('proxyHandler.getPrototypeOf', target);
        return {};
    },
    ownKeys(target) {
        console.log('proxyHandler.ownKeys');
        return ['____fullName____', '____name____'];
    },
};
const createProxy = (fullName, name) => {
    const valueOf = () => {
        console.log('valueOf called for ' + fullName);
        return fullName;
    };
    const target = () => {
    };
    // target['____fullName____'] = fullName;
    // target['____name____'] = name;
    // valueOf: valueOf,
    // toString: valueOf,
    // toSource: valueOf,
    // inspect: valueOf,
    Object.defineProperties(target, {
        ____fullName____: { configurable: false, enumerable: true, value: fullName, writable: false },
        ____name____: { configurable: false, enumerable: true, value: name, writable: false },
        // name: {configurable: false, enumerable: true, value: fullName, writable: false},
        // toSource: {configurable: false, enumerable: true, writable: false, value: valueOf},
    });
    // target.toSource = ()=> fullName;
    // target['valueOf'] = valueOf;
    // target['toString'] = valueOf;
    // target['toSource'] = valueOf;
    // target['inspect'] = valueOf;
    return new Proxy(target, proxyHandler);
};
export const createWordingProxy = (name) => {
    return createProxy(name, name);
};
