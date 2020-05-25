import { Component, Prop, Host, h } from '@stencil/core';
export class Spacer {
    render() {
        const cls = {
            vertical: this.vertical
        };
        return h(Host, { class: cls });
    }
    static get is() { return "arv-spacer"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["spacer.css"]
    }; }
    static get styleUrls() { return {
        "$": ["spacer.css"]
    }; }
    static get properties() { return {
        "vertical": {
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
                "text": "Will render a vertical spacer"
            },
            "attribute": "vertical",
            "reflect": false
        }
    }; }
}
