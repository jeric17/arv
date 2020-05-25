import { Component, h, Host } from '@stencil/core';
export class Card {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "arv-card"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["card.css"]
    }; }
    static get styleUrls() { return {
        "$": ["card.css"]
    }; }
}
