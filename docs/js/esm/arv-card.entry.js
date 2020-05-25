import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';

const cardCss = ".arv-card{height:var(--card-height, auto)}";

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    render() {
        return (h(Host, null, h("slot", null)));
    }
};
Card.style = cardCss;

export { Card as arv_card };
