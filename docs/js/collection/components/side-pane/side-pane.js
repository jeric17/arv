import { Component, Host, h } from '@stencil/core';
export class SidePane {
    render() {
        return (h(Host, null,
            h("slot", { name: "header" }),
            h("slot", null),
            h("slot", { name: "footer" })));
    }
    static get is() { return "arv-side-pane"; }
    static get originalStyleUrls() { return {
        "$": ["side-pane.css"]
    }; }
    static get styleUrls() { return {
        "$": ["side-pane.css"]
    }; }
}
