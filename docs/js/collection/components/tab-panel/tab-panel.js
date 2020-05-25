import { Component, Host, Prop, h } from '@stencil/core';
export class TabPanel {
    render() {
        const cls = {
            isActive: this.isActive
        };
        return (h(Host, { class: cls },
            h("slot", null)));
    }
    static get is() { return "arv-tab-panel"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["tab-panel.css"]
    }; }
    static get styleUrls() { return {
        "$": ["tab-panel.css"]
    }; }
    static get properties() { return {
        "isActive": {
            "type": "boolean",
            "mutable": false,
            "complexType": {
                "original": "boolean",
                "resolved": "boolean",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "is-active",
            "reflect": false
        }
    }; }
}
