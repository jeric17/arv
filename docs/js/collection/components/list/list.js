import { Component, h } from '@stencil/core';
export class List {
    render() {
        return (h("slot", null));
    }
    static get is() { return "arv-list"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["list.css"]
    }; }
    static get styleUrls() { return {
        "$": ["list.css"]
    }; }
}
