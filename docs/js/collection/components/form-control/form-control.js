import { Component, Host, h } from '@stencil/core';
export class FormControl {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "arv-form-control"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["form-control.css"]
    }; }
    static get styleUrls() { return {
        "$": ["form-control.css"]
    }; }
}
