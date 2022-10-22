export const isDecendant = (parent: Element, child: Element): boolean => {
    let node: any = child;
    while (node) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
}