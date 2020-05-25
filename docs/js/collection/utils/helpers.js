export const generateArvAttrValue = (name) => {
    if (!name) {
        return null;
    }
    return {
        [`arv-${name}`]: true,
    };
};
export const generateAttrValue = (name) => {
    if (!name) {
        return null;
    }
    return {
        [name]: true,
    };
};
export const delay = (fn, t = 100) => {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve();
        }, t);
    });
};
