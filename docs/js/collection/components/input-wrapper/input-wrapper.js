import { Component, h } from '@stencil/core';
export class InputWrapper {
    render() {
        return (h("div", { class: "arv-input-wrapper" },
            h("slot", null)));
    }
    static get is() { return "arv-input-wrapper"; }
    static get originalStyleUrls() { return {
        "$": ["input-wrapper.css"]
    }; }
    static get styleUrls() { return {
        "$": ["input-wrapper.css"]
    }; }
}
