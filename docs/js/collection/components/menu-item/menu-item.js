import { Component, Prop, Host, Event, h } from '@stencil/core';
export class MenuItem {
    render() {
        return (h(Host, { onClick: () => this.arvMenuSelect.emit(this.value) },
            !this.hideValue && (h("arv-text", { wrap: "nowrap" },
                h("slot", { name: "value" }))),
            h("slot", null)));
    }
    static get is() { return "arv-menu-item"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["menu-item.css"]
    }; }
    static get styleUrls() { return {
        "$": ["menu-item.css"]
    }; }
    static get properties() { return {
        "value": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": "Value to pass in the arvMenuSelect event."
            },
            "attribute": "value",
            "reflect": false
        },
        "hideValue": {
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
            "attribute": "hide-value",
            "reflect": false
        }
    }; }
    static get events() { return [{
            "method": "arvMenuSelect",
            "name": "arvMenuSelect",
            "bubbles": true,
            "cancelable": true,
            "composed": true,
            "docs": {
                "tags": [],
                "text": "Event emitted when clicked."
            },
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            }
        }]; }
}
