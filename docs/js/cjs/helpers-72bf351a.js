'use strict';

const generateAttrValue = (name) => {
    if (!name) {
        return null;
    }
    return {
        [name]: true,
    };
};
const delay = (fn, t = 100) => {
    return new Promise(resolve => {
        setTimeout(() => {
            fn();
            resolve();
        }, t);
    });
};

exports.delay = delay;
exports.generateAttrValue = generateAttrValue;
