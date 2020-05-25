import { Component, Prop, Host, h } from '@stencil/core';
export class Divider {
    render() {
        const cls = {
            'arv-vertical': this.isVertical
        };
        return (h(Host, { class: cls }));
    }
    static get is() { return "arv-divider"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["divider.css"]
    }; }
    static get styleUrls() { return {
        "$": ["divider.css"]
    }; }
    static get properties() { return {
        "isVertical": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": true,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-vertical",
            "reflect": false
        }
    }; }
}
