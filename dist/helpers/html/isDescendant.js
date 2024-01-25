export const isDescendant = (parent, child) => {
    let node = child;
    while (node) {
        if (node === parent) {
            return true;
        }
        node = node.parentNode;
    }
    return false;
};
