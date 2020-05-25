import { r as registerInstance, h, H as Host } from './index-8fd6d07a.js';
var cardCss = ".arv-card{height:var(--card-height, auto)}";
var Card = /** @class */ (function () {
    function Card(hostRef) {
        registerInstance(this, hostRef);
    }
    Card.prototype.render = function () {
        return (h(Host, null, h("slot", null)));
    };
    return Card;
}());
Card.style = cardCss;
export { Card as arv_card };
