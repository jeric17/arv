'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-1336621a.js');

const cardCss = ".arv-card{height:var(--card-height, auto)}";

const Card = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h(index.Host, null, index.h("slot", null)));
    }
};
Card.style = cardCss;

exports.arv_card = Card;
